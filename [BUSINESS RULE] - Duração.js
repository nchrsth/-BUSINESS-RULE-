//dmn_demand

(function executeRule(current, previous /*null when async*/) {

    // Add your code here
    
    getTimeDiff();  
    
    function getTimeDiff(){  
    var startDate = current.u_inicio_da_visita.getGlideObject();  
    var endDate = current.u_fim_da_visita.getGlideObject();  
    
    current.u_duracao = gs.dateDiff(startDate.getDisplayValueInternal(),endDate.getDisplayValueInternal(),false);  
    
    }  
    
    })(current, previous);