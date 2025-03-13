//dmn_demand
(function executeRule(current, previous /*null when async*/) {

	// Add your code here
var attachment = new GlideSysAttachment();
var dmndSysID = current.original_task.sys_id;
//var ritmGR = new GlideRecord('dmn_demand');
//ritmGR.get(ritmSysID);

var copiedAttachments = attachment.copy('dmn_demand', dmndSysID, 'rm_story', current.sys_id);
gs.info('Copied attachments: ' + copiedAttachments);

})(current, previous);