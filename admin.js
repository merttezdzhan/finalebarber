/* ==========================================================================
   DER FINALE BARBERSHOP - ADMIN DASHBOARD JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initAdmin();
});

function initAdmin() {
    loadAppointments();

    // Event listeners for filters
    const searchInput = document.getElementById('searchInput');
    const dateFilter = document.getElementById('dateFilter');
    const statusFilter = document.getElementById('statusFilter');

    if (searchInput) searchInput.addEventListener('input', loadAppointments);
    if (dateFilter) dateFilter.addEventListener('change', loadAppointments);
    if (statusFilter) statusFilter.addEventListener('change', loadAppointments);
}

function loadAppointments() {
    const tbody = document.getElementById('appointmentsTableBody');
    if (!tbody) return;

    let appointments = JSON.parse(localStorage.getItem('barberAppointments')) || [];

    // Update Overall Stats
    updateStats(appointments);

    // Read Filter Values
    const searchVal = document.getElementById('searchInput')?.value.toLowerCase().trim() || '';
    const dateVal = document.getElementById('dateFilter')?.value || '';
    const statusVal = document.getElementById('statusFilter')?.value || 'ALL';

    // Filter Logic
    let filtered = appointments.filter(app => {
        const matchesSearch = app.name.toLowerCase().includes(searchVal) || app.phone.includes(searchVal);
        const matchesDate = dateVal === '' || app.date === dateVal;
        const matchesStatus = statusVal === 'ALL' || app.status === statusVal;
        return matchesSearch && matchesDate && matchesStatus;
    });

    // Sort newest first
    filtered.sort((a, b) => new Date(`${b.date}T${b.time}`) - new Date(`${a.date}T${a.time}`));

    tbody.innerHTML = '';

    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7">
                    <div class="empty-table-state">
                        <i class="fa-solid fa-calendar-xmark"></i>
                        <h3>Kayıtlı Randevu Bulunamadı</h3>
                        <p>Arama kriterlerinize uygun randevu bulunmuyor.</p>
                    </div>
                </td>
            </tr>
        `;
        return;
    }

    filtered.forEach(app => {
        const tr = document.createElement('tr');
        
        let statusBadgeClass = 'status-bekliyor';
        if (app.status === 'Onaylandı') statusBadgeClass = 'status-onaylandi';
        if (app.status === 'Storniert') statusBadgeClass = 'status-storniert';

        tr.innerHTML = `
            <td>
                <strong><i class="fa-regular fa-calendar"></i> ${formatDate(app.date)}</strong><br>
                <small style="color: var(--primary-gold);"><i class="fa-regular fa-clock"></i> ${app.time}</small>
            </td>
            <td><strong>${escapeHtml(app.name)}</strong></td>
            <td><a href="tel:${app.phone}" style="color: var(--text-secondary);">${escapeHtml(app.phone)}</a></td>
            <td><span class="badge badge-gold" style="font-size:0.75rem;">${escapeHtml(app.service)}</span></td>
            <td><small>${app.notes ? escapeHtml(app.notes) : '-'}</small></td>
            <td><span class="badge-status ${statusBadgeClass}">${app.status}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-icon btn-confirm" title="Onayla" onclick="updateStatus(${app.id}, 'Onaylandı')">
                        <i class="fa-solid fa-check"></i>
                    </button>
                    <button class="btn btn-icon btn-cancel" title="İptal Et" onclick="updateStatus(${app.id}, 'Storniert')">
                        <i class="fa-solid fa-ban"></i>
                    </button>
                    <button class="btn btn-icon btn-delete" title="Sil" onclick="deleteAppointment(${app.id})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

function updateStats(appointments) {
    const todayStr = new Date().toISOString().split('T')[0];

    const total = appointments.length;
    const pending = appointments.filter(a => a.status === 'Bekliyor').length;
    const approved = appointments.filter(a => a.status === 'Onaylandı').length;
    const today = appointments.filter(a => a.date === todayStr).length;

    document.getElementById('statTotalCount').textContent = total;
    document.getElementById('statPendingCount').textContent = pending;
    document.getElementById('statApprovedCount').textContent = approved;
    document.getElementById('statTodayCount').textContent = today;
}

function updateStatus(id, newStatus) {
    let appointments = JSON.parse(localStorage.getItem('barberAppointments')) || [];
    appointments = appointments.map(app => {
        if (app.id === id) {
            return { ...app, status: newStatus };
        }
        return app;
    });
    localStorage.setItem('barberAppointments', JSON.stringify(appointments));
    loadAppointments();
}

function deleteAppointment(id) {
    if (confirm('Bu randevuyu silmek istediğinize emin misiniz?')) {
        let appointments = JSON.parse(localStorage.getItem('barberAppointments')) || [];
        appointments = appointments.filter(app => app.id !== id);
        localStorage.setItem('barberAppointments', JSON.stringify(appointments));
        loadAppointments();
    }
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('dateFilter').value = '';
    document.getElementById('statusFilter').value = 'ALL';
    loadAppointments();
}

function exportToCSV() {
    let appointments = JSON.parse(localStorage.getItem('barberAppointments')) || [];
    if (appointments.length === 0) {
        alert('İndirilecek randevu bulunmamaktadır.');
        return;
    }

    let csvContent = "data:text/csv;charset=utf-8,ID,Tarih,Saat,Musteri,Telefon,Hizmet,Notlar,Durum\n";

    appointments.forEach(a => {
        const row = [
            a.id,
            a.date,
            a.time,
            `"${a.name}"`,
            `"${a.phone}"`,
            `"${a.service}"`,
            `"${a.notes || ''}"`,
            a.status
        ].join(",");
        csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Finale_Barbershop_Randevular_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function formatDate(dateStr) {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
        return `${parts[2]}.${parts[1]}.${parts[0]}`;
    }
    return dateStr;
}

function escapeHtml(text) {
    if (!text) return '';
    return text.replace(/[&<>"']/g, function(m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });
}
