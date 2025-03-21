(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
    var query = '';
    var grMalote = new GlideRecord('u_malote');
    if (current.u_origem == '7af6742a1b8d2850536853111b4bcbb4') { // New Office
        query = 'u_malote2=true^u_stateINem_montagem,em_separacao^u_destino=' + current.u_destinou_malotinho.sys_id;
    } else {
        query = 'u_malote2=true^u_stateINem_montagem,em_separacao^u_origem_malote=' + current.u_origem.sys_id;
    }
    grMalote.addEncodedQuery(query);
    grMalote.query();
    if (grMalote.next()) {
        current.u_malote = grMalote.sys_id;
        current.u_malote_pai = grMalote.sys_id;
    } else {
        grMalote.initialize();
        grMalote.u_malote2 = 'true';
        grMalote.u_origem_malote = current.u_origem;
        if (current.u_origem == '7af6742a1b8d2850536853111b4bcbb4') { //New Office
            grMalote.u_destino = current.u_destinou_malotinho;
        } else {
            grMalote.u_destino = '7af6742a1b8d2850536853111b4bcbb4'; //New Office
        }

        if (current.u_origem == '7af6742a1b8d2850536853111b4bcbb4') { //New Office
            grMalote.u_state = 'em_separacao';
        } else {
            grMalote.u_state = 'em_montagem';
        }
        grMalote.insert();
        current.u_malote = grMalote.sys_id;
        current.u_malote_pai = grMalote.sys_id;
    }
})(current, previous);/**/