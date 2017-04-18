﻿$p.openExportSettingsDialog = function ($control) {
    delete $p.data.ExportSettingsForm;
    error = $p.ajax(
        $control.attr('data-action'),
        $control.attr('data-method'),
        $p.getData($('#ExportSettingsForm')),
        $control,
        false);
    if (error === 0) {
        $('#ExportSettingsDialog').dialog({
            modal: true,
            width: '980px'
        });
    }
}

$p.export = function ($control) {
    error = $p.syncSend($control);
    if (error === 0) {
        location.href = $('.main-form').attr('action').replace('_action_', 'export');
    }
}