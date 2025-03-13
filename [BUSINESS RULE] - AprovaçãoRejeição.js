var grReqItem = new GlideRecord("sc_req_item");
grReqItem.addEncodedQuery("sys_id=" + current.sysapproval.toString());
grReqItem.query();
if (grReqItem.next()) {

    var variables = grReqItem.variable_pool;
    var opcao = current.state.toString() == "approved" ? "4" : "7";

    var grCL = new GlideRecord('cmn_location');
    grCL.addEncodedQuery("sys_id=" + variables.doc_filial.toString());
    grCL.query();
    if (grCL.next()) {
        var filial = grCL.u_subsidiary.toString();
    }
}
    new AAPedidoDeCompraUtils().createEvent(grReqItem,opcao);



    /*var grReqItem = new GlideRecord("sc_req_item");

    grReqItem.addEncodedQuery("sys_id=" + current.sysapproval.toString());
    grReqItem.query();

    if (grReqItem.next()) {

    	var variables = grReqItem.variable_pool;
    	var opcao = current.state.toString() == "approved" ? "4" : "7";

    	var grCL = new GlideRecord('cmn_location');
    	grCL.addEncodedQuery("sys_id=" + variables.doc_filial.toString());
    	grCL.query();
    	if (grCL.next()) {
    		var filial = grCL.u_subsidiary.toString();
    	}

    	var dados = {
    		doc_filial: filial,
    		doc_documento: variables.doc_documento.toString(),
    		doc_tipo: variables.doc_tipo.toString(),
    		doc_valor_total: variables.doc_valor_total.toString(),
    		doc_aprovador_id: variables.doc_aprovador_id.toString(),
    		doc_usuario_id: variables.doc_usuario_id.toString(),
    		doc_grupo: variables.doc_grupo.toString(),
    		doc_opcao: opcao,
    		doc_recno_scr: variables.doc_recno_scr.toString()
    	};

    	var grAlpEventos = new GlideRecord('u_alp_eventos');
    	grAlpEventos.initialize();
    	grAlpEventos.u_source = 'servicenow';
    	grAlpEventos.u_target = 'protheus';
    	grAlpEventos.u_playload = JSON.stringify(dados);
    	grAlpEventos.u_task = grReqItem.getUniqueValue();
    	grAlpEventos.u_method = 'POST_liberacao_documentos';
    	grAlpEventos.u_tenantid = '00,' + filial;
    	grAlpEventos.u_rest_message = 'Integration_ ERP_Protheus';
    	grAlpEventos.insert();
    }*/


/*
 createEvent: function (grReqItem, opcao) {

        var filial = grReqItem.variable_pool.pedido_filial.getDisplayValue().substr(0, 6);
        var dados = this.getBodySCR(grReqItem, opcao);

        var grAlpEventos = new GlideRecord('u_alp_eventos');
        grAlpEventos.initialize();
        grAlpEventos.u_source = 'servicenow';
        grAlpEventos.u_target = 'protheus';
        grAlpEventos.u_tenantid = "00," + filial;
        grAlpEventos.u_playload = JSON.stringify(dados);
        grAlpEventos.u_task = grReqItem.getUniqueValue();
        grAlpEventos.u_method = 'POST_liberacao_documentos';
        grAlpEventos.u_rest_message = 'Integration_ ERP_Protheus';
        return grAlpEventos.insert();

    },
*/