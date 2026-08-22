/* ==========================================================================
   FINALE BARBERSHOP V2 - ADMIN PANEL DASHBOARD LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initAdmin();
});

function initAdmin() {
    const searchInput = document.getElementById('searchInput');
    const dateFilter = document.getElementById('dateFilter');
    const statusFilter = document.getElementById('statusFilter');

    if (searchInput) searchInput.addEventListener('input', renderDashboard);
    if (dateFilter) dateFilter.addEventListener('change', renderDashboard);
    if (statusFilter) statusFilter.addEventListener('change', renderDashboard);

    renderDashboard();
}

function getAppointments() {
    return JSON.parse(localStorage.getItem('barberAppointments')) || [];
}

function saveAppointments(apps) {
    localStorage.setItem('barberAppointments', JSON.stringify(apps));
    renderDashboard();
}

function renderDashboard() {
    const apps = getAppointments();

    // 1. Calculate Stats Counters
    const todayStr = new Date().toISOString().split('T')[0];
    
    const totalCount = apps.length;
    const pendingCount = apps.filter(a => a.status === 'Bekliyor').length;
    const approvedCount = apps.filter(a => a.status === 'Onaylandı').length;
    const todayCount = apps.filter(a => a.date === todayStr).length;

    document.getElementById('statTotalCount').textContent = totalCount;
    document.getElementById('statPendingCount').textContent = pendingCount;
    document.getElementById('statApprovedCount').textContent = approvedCount;
    document.getElementById('statTodayCount').textContent = todayCount;

    // 2. Filter Table Items
    const searchVal = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
    const dateVal = document.getElementById('dateFilter')?.value || '';
    const statusVal = document.getElementById('statusFilter')?.value || 'ALL';

    const filtered = apps.filter(app => {
        const matchesSearch = !searchVal || 
            (app.name && app.name.toLowerCase().includes(searchVal)) || 
            (app.phone && app.phone.toLowerCase().includes(searchVal)) ||
            (app.service && app.service.toLowerCase().includes(searchVal));

        const matchesDate = !dateVal || app.date === dateVal;

        const matchesStatus = statusVal === 'ALL' || app.status === statusVal;

        return matchesSearch && matchesDate && matchesStatus;
    });

    // Sort newest date & time first
    filtered.sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}`);
        const dateB = new Date(`${b.date}T${b.time}`);
        return dateB - dateA;
    });

    // 3. Render Table Rows
    const tbody = document.getElementById('appointmentsTableBody');
    if (!tbody) return;

    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7">
                    <div class="empty-table-state">
                        <i class="fa-solid fa-calendar-xmark"></i>
                        <p>Hiç randevu kaydı bulunamadı.</p>
                    </div>
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = filtered.map(app => {
        let statusBadgeClass = 'status-bekliyor';
        if (app.status === 'Onaylandı') statusBadgeClass = 'status-onaylandi';
        if (app.status === 'Storniert') statusBadgeClass = 'status-storniert';

        const formattedDate = formatDateDisplay(app.date);

        return `
            <tr>
                <td><strong>${formattedDate}</strong> <br><small style="color: var(--amber-light);">${app.time}</small></td>
                <td><strong>${escapeHtml(app.name)}</strong></td>
                <td><a href="tel:${escapeHtml(app.phone)}" style="color: var(--text-primary);">${escapeHtml(app.phone)}</a></td>
                <td>${escapeHtml(app.service)}</td>
                <td><small style="color: var(--text-muted);">${escapeHtml(app.notes || '-')}</small></td>
                <td><span class="badge-status ${statusBadgeClass}">${escapeHtml(app.status)}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-icon btn-confirm" onclick="updateStatus(${app.id}, 'Onaylandı')" title="Onayla">
                            <i class="fa-solid fa-check"></i>
                        </button>
                        <button class="btn-icon btn-cancel" onclick="updateStatus(${app.id}, 'Storniert')" title="İptal Et">
                            <i class="fa-solid fa-rotate-left"></i>
                        </button>
                        <button class="btn-icon btn-delete" onclick="deleteAppointment(${app.id})" title="Sil">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function updateStatus(id, newStatus) {
    let apps = getAppointments();
    apps = apps.map(app => {
        if (app.id === id) {
            return { ...app, status: newStatus };
        }
        return app;
    });
    saveAppointments(apps);
}

function deleteAppointment(id) {
    if (!confirm('Bu randevuyu silmek istediğinizden emin misiniz?')) return;
    let apps = getAppointments();
    apps = apps.filter(app => app.id !== id);
    saveAppointments(apps);
}

function resetFilters() {
    if (document.getElementById('searchInput')) document.getElementById('searchInput').value = '';
    if (document.getElementById('dateFilter')) document.getElementById('dateFilter').value = '';
    if (document.getElementById('statusFilter')) document.getElementById('statusFilter').value = 'ALL';
    renderDashboard();
}

function exportToCSV() {
    const apps = getAppointments();
    if (apps.length === 0) {
        alert('İndirilecek randevu kaydı bulunmamaktadır.');
        return;
    }

    let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; // UTF-8 BOM
    csvContent += "ID;Tarih;Saat;Müşteri Adı;Telefon;Hizmet;Notlar;Durum\n";

    apps.forEach(a => {
        const row = [
            a.id,
            a.date,
            a.time,
            `"${(a.name || '').replace(/"/g, '""')}"`,
            `"${(a.phone || '').replace(/"/g, '""')}"`,
            `"${(a.service || '').replace(/"/g, '""')}"`,
            `"${(a.notes || '').replace(/"/g, '""')}"`,
            a.status
        ].join(";");
        csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `finale_barbershop_randevular_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function formatDateDisplay(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
        return `${parts[2]}.${parts[1]}.${parts[0]}`;
    }
    return dateStr;
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
