(function executeRule(current, previous /*null when async*/) {

	current.comments = 'Tarefa resolvida. \n\nNotas de Fechamento: ' + current.close_notes

})(current, previous);