/*** Zen Module: Form_JSON ***/

self._zenClassIdx['OBJ'] = 'Form_JSON_OBJ';
self.Form_JSON_OBJ = function(index,id) {
	if (index>=0) {Form_JSON_OBJ__init(this,index,id);}
}

self.Form_JSON_OBJ__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Auxiliary_jsonProvider__init) ?zenMaster._ZEN_Auxiliary_jsonProvider__init(o,index,id):_ZEN_Auxiliary_jsonProvider__init(o,index,id);
}
function Form_JSON_OBJ_serialize(set,s)
{
	var o = this;s[0]='2092629197';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.OnGetArray;s[7]=o.OnGetTargetObject;s[8]=o.OnRenderJSON;s[9]=o.OnSubmitContent;s[10]=(o.alertOnError?1:0);s[11]=o.align;s[12]=o.autoRefresh;s[13]=o.aux;s[14]=o.containerStyle;s[15]=o.content;s[16]=o.contentType;s[17]=set.addObject(o.criteria,'criteria');s[18]=set.addObject(o.dataBag,'dataBag');s[19]=(o.dataLoaded?1:0);s[20]=(o.dataReadOnly?1:0);s[21]=o.defaultSeries;s[22]=o.documentId;s[23]=(o.dragEnabled?1:0);s[24]=(o.dropEnabled?1:0);s[25]=(o.dynamic?1:0);s[26]=o.enclosingClass;s[27]=o.enclosingStyle;s[28]=o.error;s[29]=o.height;s[30]=(o.hidden?1:0);s[31]=o.hint;s[32]=o.hintClass;s[33]=o.hintStyle;s[34]=o.label;s[35]=o.labelClass;s[36]=o.labelDisabledClass;s[37]=o.labelStyle;s[38]=(o.modelChanged?1:0);s[39]=o.modelError;s[40]=o.modelId;s[41]=o.onafterdrag;s[42]=o.onbeforedrag;s[43]=o.oncreate;s[44]=o.ondelete;s[45]=o.ondrag;s[46]=o.ondrop;s[47]=o.onerror;s[48]=o.onhide;s[49]=o.onnotifyController;s[50]=o.onrefresh;s[51]=o.onsave;s[52]=o.onshow;s[53]=o.onupdate;s[54]=o.overlayMode;s[55]=set.serializeArray(o,o.parameters,true,'parameters');s[56]=o.propertyList;s[57]=(o.readOnly?1:0);s[58]=o.renderFlag;s[59]=o.seriesNameProperty;s[60]=(o.showLabel?1:0);s[61]=o.slice;s[62]=o.targetClass;s[63]=o.timerid;s[64]=o.title;s[65]=o.tuple;s[66]=o.valign;s[67]=(o.visible?1:0);s[68]=o.width;
}
function Form_JSON_OBJ_getSettings(s)
{
	s['name'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self.Form_JSON_OBJ_DeleteFromServer = function(pID) {
	return zenInstanceMethod(this,'DeleteFromServer','L','BOOLEAN',arguments);
}

self.Form_JSON_OBJ_ExecuteAction = function(pAction,pData) {
	return zenInstanceMethod(this,'ExecuteAction','L,L','BOOLEAN',arguments);
}

self.Form_JSON_OBJ_LoadFromServer = function() {
	return zenInstanceMethod(this,'LoadFromServer','','VARCHAR',arguments);
}

self.Form_JSON_OBJ_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}

self.Form_JSON_OBJ_RefreshFromServer = function() {
	return zenInstanceMethod(this,'RefreshFromServer','','BOOLEAN',arguments);
}

self.Form_JSON_OBJ_RefreshFromServerAsynch = function() {
	zenInstanceMethod(this,'RefreshFromServerAsynch','','',arguments);
}

self.Form_JSON_OBJ_SaveToServer = function() {
	return zenInstanceMethod(this,'SaveToServer','','VARCHAR',arguments);
}

self.Form_JSON_OBJ_SubmitToServer = function(pCommand,pContent,pTargetClass) {
	return zenInstanceMethod(this,'SubmitToServer','L,L,L','BOOLEAN',arguments);
}

self.Form_JSON_OBJ_SubmitToServerAsync = function(pCommand,pContent,pTargetClass) {
	zenInstanceMethod(this,'SubmitToServerAsync','L,L,L','',arguments);
}
self.Form_JSON_OBJ__Loader = function() {
	zenLoadClass('_ZEN_Auxiliary_jsonProvider');
	Form_JSON_OBJ.prototype = zenCreate('_ZEN_Auxiliary_jsonProvider',-1);
	var p = Form_JSON_OBJ.prototype;
	if (null==p) {return;}
	p.constructor = Form_JSON_OBJ;
	p.superClass = ('undefined' == typeof _ZEN_Auxiliary_jsonProvider) ? zenMaster._ZEN_Auxiliary_jsonProvider.prototype:_ZEN_Auxiliary_jsonProvider.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'Form.JSON.OBJ';
	p._type = 'OBJ';
	p.serialize = Form_JSON_OBJ_serialize;
	p.getSettings = Form_JSON_OBJ_getSettings;
	p.DeleteFromServer = Form_JSON_OBJ_DeleteFromServer;
	p.ExecuteAction = Form_JSON_OBJ_ExecuteAction;
	p.LoadFromServer = Form_JSON_OBJ_LoadFromServer;
	p.ReallyRefreshContents = Form_JSON_OBJ_ReallyRefreshContents;
	p.RefreshFromServer = Form_JSON_OBJ_RefreshFromServer;
	p.RefreshFromServerAsynch = Form_JSON_OBJ_RefreshFromServerAsynch;
	p.SaveToServer = Form_JSON_OBJ_SaveToServer;
	p.SubmitToServer = Form_JSON_OBJ_SubmitToServer;
	p.SubmitToServerAsync = Form_JSON_OBJ_SubmitToServerAsync;
}

self._zenClassIdx['SQL'] = 'Form_JSON_SQL';
self.Form_JSON_SQL = function(index,id) {
	if (index>=0) {Form_JSON_SQL__init(this,index,id);}
}

self.Form_JSON_SQL__init = function(o,index,id) {
	('undefined' == typeof _ZEN_Auxiliary_altJSONSQLProvider__init) ?zenMaster._ZEN_Auxiliary_altJSONSQLProvider__init(o,index,id):_ZEN_Auxiliary_altJSONSQLProvider__init(o,index,id);
	o.OnCreateResultSet = ''; // encrypted
	o.OnExecuteResultSet = ''; // encrypted
	o.columnName = '';
	o.countRows = '0';
	o.groupByClause = '';
	o.maxRows = '100';
	o.orderByClause = '';
	o.queryClass = ''; // encrypted
	o.queryName = '';
	o.sql = ''; // encrypted
	o.tableName = ''; // encrypted
	o.whereClause = '';
}
function Form_JSON_SQL_serialize(set,s)
{
	var o = this;s[0]='320028001';s[1]=o.index;s[2]=o.id;s[3]=o.name;s[4]=set.addObject(o.parent,'parent');s[5]=set.addObject(o.composite,'composite');s[6]=o.OnCreateResultSet;s[7]=o.OnExecuteResultSet;s[8]=o.OnGetArray;s[9]=o.OnGetSQL;s[10]=o.OnGetTargetObject;s[11]=o.OnRenderJSON;s[12]=o.OnSubmitContent;s[13]=(o.alertOnError?1:0);s[14]=o.align;s[15]=o.arrayName;s[16]=o.autoRefresh;s[17]=o.aux;s[18]=o.columnName;s[19]=o.containerStyle;s[20]=o.content;s[21]=o.contentType;s[22]=o.countRows;s[23]=set.addObject(o.criteria,'criteria');s[24]=o.currPage;s[25]=set.addObject(o.dataBag,'dataBag');s[26]=(o.dataLoaded?1:0);s[27]=(o.dataReadOnly?1:0);s[28]=o.defaultSeries;s[29]=o.documentId;s[30]=(o.dragEnabled?1:0);s[31]=(o.dropEnabled?1:0);s[32]=(o.dynamic?1:0);s[33]=o.enclosingClass;s[34]=o.enclosingStyle;s[35]=o.error;s[36]=o.groupByClause;s[37]=o.height;s[38]=(o.hidden?1:0);s[39]=o.hint;s[40]=o.hintClass;s[41]=o.hintStyle;s[42]=o.label;s[43]=o.labelClass;s[44]=o.labelDisabledClass;s[45]=o.labelStyle;s[46]=o.maxRows;s[47]=(o.modelChanged?1:0);s[48]=o.modelError;s[49]=o.modelId;s[50]=o.onafterdrag;s[51]=o.onbeforedrag;s[52]=o.oncreate;s[53]=o.ondelete;s[54]=o.ondrag;s[55]=o.ondrop;s[56]=o.onerror;s[57]=o.onhide;s[58]=o.onnotifyController;s[59]=o.onrefresh;s[60]=o.onsave;s[61]=o.onshow;s[62]=o.onupdate;s[63]=o.orderByClause;s[64]=o.overlayMode;s[65]=o.pageSize;s[66]=set.serializeArray(o,o.parameters,true,'parameters');s[67]=o.propertyList;s[68]=o.queryClass;s[69]=o.queryName;s[70]=(o.readOnly?1:0);s[71]=o.recordCount;s[72]=o.renderFlag;s[73]=o.seriesNameProperty;s[74]=(o.showLabel?1:0);s[75]=o.slice;s[76]=o.sql;s[77]=o.tableName;s[78]=o.targetClass;s[79]=o.timerid;s[80]=o.title;s[81]=o.tuple;s[82]=o.valign;s[83]=(o.visible?1:0);s[84]=o.whereClause;s[85]=o.width;
}
function Form_JSON_SQL_getSettings(s)
{
	s['name'] = 'string';
	s['columnName'] = 'string';
	s['countRows'] = 'integer';
	s['groupByClause'] = 'string';
	s['maxRows'] = 'integer';
	s['orderByClause'] = 'string';
	s['queryClass'] = 'className';
	s['queryName'] = 'classMember:QUERY';
	s['sql'] = 'sql';
	s['tableName'] = 'string';
	s['whereClause'] = 'string';
	this.invokeSuper('getSettings',arguments);
}

self.Form_JSON_SQL_DeleteFromServer = function(pID) {
	return zenInstanceMethod(this,'DeleteFromServer','L','BOOLEAN',arguments);
}

self.Form_JSON_SQL_ExecuteAction = function(pAction,pData) {
	return zenInstanceMethod(this,'ExecuteAction','L,L','BOOLEAN',arguments);
}

self.Form_JSON_SQL_LoadFromServer = function() {
	return zenInstanceMethod(this,'LoadFromServer','','VARCHAR',arguments);
}

self.Form_JSON_SQL_ReallyRefreshContents = function() {
	zenInstanceMethod(this,'ReallyRefreshContents','','',arguments);
}

self.Form_JSON_SQL_RefreshFromServer = function() {
	return zenInstanceMethod(this,'RefreshFromServer','','BOOLEAN',arguments);
}

self.Form_JSON_SQL_RefreshFromServerAsynch = function() {
	zenInstanceMethod(this,'RefreshFromServerAsynch','','',arguments);
}

self.Form_JSON_SQL_SaveToServer = function() {
	return zenInstanceMethod(this,'SaveToServer','','VARCHAR',arguments);
}

self.Form_JSON_SQL_SubmitToServer = function(pCommand,pContent,pTargetClass) {
	return zenInstanceMethod(this,'SubmitToServer','L,L,L','BOOLEAN',arguments);
}

self.Form_JSON_SQL_SubmitToServerAsync = function(pCommand,pContent,pTargetClass) {
	zenInstanceMethod(this,'SubmitToServerAsync','L,L,L','',arguments);
}
self.Form_JSON_SQL__Loader = function() {
	zenLoadClass('_ZEN_Auxiliary_altJSONSQLProvider');
	Form_JSON_SQL.prototype = zenCreate('_ZEN_Auxiliary_altJSONSQLProvider',-1);
	var p = Form_JSON_SQL.prototype;
	if (null==p) {return;}
	p.constructor = Form_JSON_SQL;
	p.superClass = ('undefined' == typeof _ZEN_Auxiliary_altJSONSQLProvider) ? zenMaster._ZEN_Auxiliary_altJSONSQLProvider.prototype:_ZEN_Auxiliary_altJSONSQLProvider.prototype;
	p.__ZENcomponent = true;
	p._serverClass = 'Form.JSON.SQL';
	p._type = 'SQL';
	p.serialize = Form_JSON_SQL_serialize;
	p.getSettings = Form_JSON_SQL_getSettings;
	p.DeleteFromServer = Form_JSON_SQL_DeleteFromServer;
	p.ExecuteAction = Form_JSON_SQL_ExecuteAction;
	p.LoadFromServer = Form_JSON_SQL_LoadFromServer;
	p.ReallyRefreshContents = Form_JSON_SQL_ReallyRefreshContents;
	p.RefreshFromServer = Form_JSON_SQL_RefreshFromServer;
	p.RefreshFromServerAsynch = Form_JSON_SQL_RefreshFromServerAsynch;
	p.SaveToServer = Form_JSON_SQL_SaveToServer;
	p.SubmitToServer = Form_JSON_SQL_SubmitToServer;
	p.SubmitToServerAsync = Form_JSON_SQL_SubmitToServerAsync;
}
/* EOF */