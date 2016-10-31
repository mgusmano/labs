Ext.define('Viewer.override.button.Button', {
    override: 'Ext.button.Button',

    setUI: function(ui) {
        if(this.scale && !ui.match(new RegExp('^.*-'+this.scale+'$', 'g'))) {
            ui = ui + '-' + this.scale;
        }

        this.callParent([ui]);
    }
});