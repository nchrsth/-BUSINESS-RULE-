//sc_task
(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	current.dias_para_vencimento.changes(); // Isso indica que houve uma alteração, mas não a registra no histórico
current.dias_para_vencimento = newValue; // Altera o valor do campo

})(current, previous);