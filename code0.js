gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDBackgroundObjects3= [];
gdjs.Untitled_32sceneCode.GDBackgroundObjects4= [];
gdjs.Untitled_32sceneCode.GDBackgroundObjects5= [];
gdjs.Untitled_32sceneCode.GDPinObjects1= [];
gdjs.Untitled_32sceneCode.GDPinObjects2= [];
gdjs.Untitled_32sceneCode.GDPinObjects3= [];
gdjs.Untitled_32sceneCode.GDPinObjects4= [];
gdjs.Untitled_32sceneCode.GDPinObjects5= [];
gdjs.Untitled_32sceneCode.GDBallObjects1= [];
gdjs.Untitled_32sceneCode.GDBallObjects2= [];
gdjs.Untitled_32sceneCode.GDBallObjects3= [];
gdjs.Untitled_32sceneCode.GDBallObjects4= [];
gdjs.Untitled_32sceneCode.GDBallObjects5= [];
gdjs.Untitled_32sceneCode.GDWallsObjects1= [];
gdjs.Untitled_32sceneCode.GDWallsObjects2= [];
gdjs.Untitled_32sceneCode.GDWallsObjects3= [];
gdjs.Untitled_32sceneCode.GDWallsObjects4= [];
gdjs.Untitled_32sceneCode.GDWallsObjects5= [];
gdjs.Untitled_32sceneCode.GDPiramydObjects1= [];
gdjs.Untitled_32sceneCode.GDPiramydObjects2= [];
gdjs.Untitled_32sceneCode.GDPiramydObjects3= [];
gdjs.Untitled_32sceneCode.GDPiramydObjects4= [];
gdjs.Untitled_32sceneCode.GDPiramydObjects5= [];
gdjs.Untitled_32sceneCode.GDFanObjects1= [];
gdjs.Untitled_32sceneCode.GDFanObjects2= [];
gdjs.Untitled_32sceneCode.GDFanObjects3= [];
gdjs.Untitled_32sceneCode.GDFanObjects4= [];
gdjs.Untitled_32sceneCode.GDFanObjects5= [];
gdjs.Untitled_32sceneCode.GDPivotObjects1= [];
gdjs.Untitled_32sceneCode.GDPivotObjects2= [];
gdjs.Untitled_32sceneCode.GDPivotObjects3= [];
gdjs.Untitled_32sceneCode.GDPivotObjects4= [];
gdjs.Untitled_32sceneCode.GDPivotObjects5= [];
gdjs.Untitled_32sceneCode.GDArmObjects1= [];
gdjs.Untitled_32sceneCode.GDArmObjects2= [];
gdjs.Untitled_32sceneCode.GDArmObjects3= [];
gdjs.Untitled_32sceneCode.GDArmObjects4= [];
gdjs.Untitled_32sceneCode.GDArmObjects5= [];
gdjs.Untitled_32sceneCode.GDBaseObjects1= [];
gdjs.Untitled_32sceneCode.GDBaseObjects2= [];
gdjs.Untitled_32sceneCode.GDBaseObjects3= [];
gdjs.Untitled_32sceneCode.GDBaseObjects4= [];
gdjs.Untitled_32sceneCode.GDBaseObjects5= [];
gdjs.Untitled_32sceneCode.GDFan2Objects1= [];
gdjs.Untitled_32sceneCode.GDFan2Objects2= [];
gdjs.Untitled_32sceneCode.GDFan2Objects3= [];
gdjs.Untitled_32sceneCode.GDFan2Objects4= [];
gdjs.Untitled_32sceneCode.GDFan2Objects5= [];
gdjs.Untitled_32sceneCode.GDLineaObjects1= [];
gdjs.Untitled_32sceneCode.GDLineaObjects2= [];
gdjs.Untitled_32sceneCode.GDLineaObjects3= [];
gdjs.Untitled_32sceneCode.GDLineaObjects4= [];
gdjs.Untitled_32sceneCode.GDLineaObjects5= [];
gdjs.Untitled_32sceneCode.GDZone1Objects1= [];
gdjs.Untitled_32sceneCode.GDZone1Objects2= [];
gdjs.Untitled_32sceneCode.GDZone1Objects3= [];
gdjs.Untitled_32sceneCode.GDZone1Objects4= [];
gdjs.Untitled_32sceneCode.GDZone1Objects5= [];
gdjs.Untitled_32sceneCode.GDRingObjects1= [];
gdjs.Untitled_32sceneCode.GDRingObjects2= [];
gdjs.Untitled_32sceneCode.GDRingObjects3= [];
gdjs.Untitled_32sceneCode.GDRingObjects4= [];
gdjs.Untitled_32sceneCode.GDRingObjects5= [];
gdjs.Untitled_32sceneCode.GDZone2Objects1= [];
gdjs.Untitled_32sceneCode.GDZone2Objects2= [];
gdjs.Untitled_32sceneCode.GDZone2Objects3= [];
gdjs.Untitled_32sceneCode.GDZone2Objects4= [];
gdjs.Untitled_32sceneCode.GDZone2Objects5= [];
gdjs.Untitled_32sceneCode.GDBallEmptyObjects1= [];
gdjs.Untitled_32sceneCode.GDBallEmptyObjects2= [];
gdjs.Untitled_32sceneCode.GDBallEmptyObjects3= [];
gdjs.Untitled_32sceneCode.GDBallEmptyObjects4= [];
gdjs.Untitled_32sceneCode.GDBallEmptyObjects5= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBallObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Linea"), gdjs.Untitled_32sceneCode.GDLineaObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDPivotObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLineaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLineaObjects1[i].drawLineV2((( gdjs.Untitled_32sceneCode.GDPivotObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPivotObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDPivotObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPivotObjects1[0].getPointY("")), (( gdjs.Untitled_32sceneCode.GDBallObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBallObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDBallObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBallObjects1[0].getPointY("")), 10);
}
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Untitled_32sceneCode.GDBallObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDZone1Objects1Objects = Hashtable.newFrom({"Zone1": gdjs.Untitled_32sceneCode.GDZone1Objects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9778780);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback11800188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(11800188, gdjs.Untitled_32sceneCode.asyncCallback11800188);
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback11800188(runtimeScene, asyncObjectsList)), 11800188, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9788820);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Untitled_32sceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zone1"), gdjs.Untitled_32sceneCode.GDZone1Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallObjects1[i].getBehavior("Physics2").setGravityScale(0.5);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDZone1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDZone1Objects1[i].setY(2200);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Untitled_32sceneCode.GDBallObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPinObjects1Objects = Hashtable.newFrom({"Pin": gdjs.Untitled_32sceneCode.GDPinObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDRingObjects1Objects = Hashtable.newFrom({"Ring": gdjs.Untitled_32sceneCode.GDRingObjects1});
gdjs.Untitled_32sceneCode.asyncCallback9598356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Ring"), gdjs.Untitled_32sceneCode.GDRingObjects5);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRingObjects5.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRingObjects5[i].deleteFromScene(runtimeScene);
}
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(9598356, gdjs.Untitled_32sceneCode.asyncCallback9598356);
gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
/* Don't save Ring as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9598356(runtimeScene, asyncObjectsList)), 9598356, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback11758436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Pin"), gdjs.Untitled_32sceneCode.GDPinObjects4);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPinObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPinObjects4[i].getBehavior("Animation").setAnimationName("Pin1");
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(11758436, gdjs.Untitled_32sceneCode.asyncCallback11758436);
gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
/* Don't save Pin as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.Untitled_32sceneCode.GDRingObjects3) asyncObjectsList.addObject("Ring", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback11758436(runtimeScene, asyncObjectsList)), 11758436, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback9598428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Ring"), gdjs.Untitled_32sceneCode.GDRingObjects3);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRingObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRingObjects3[i].getBehavior("Tween").addObjectOpacityTween2("opacidadring", 0, "linear", 0.3, false);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(9598428, gdjs.Untitled_32sceneCode.asyncCallback9598428);
gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
/* Don't save Pin as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.Untitled_32sceneCode.GDRingObjects2) asyncObjectsList.addObject("Ring", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9598428(runtimeScene, asyncObjectsList)), 9598428, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback11769356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Ring"), gdjs.Untitled_32sceneCode.GDRingObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRingObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRingObjects2[i].getBehavior("Tween").addObjectScaleTween3("escalaring", 0.4, "linear", 0.4, false, false);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(11769356, gdjs.Untitled_32sceneCode.asyncCallback11769356);
gdjs.Untitled_32sceneCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDPinObjects1) asyncObjectsList.addObject("Pin", obj);
for (const obj of gdjs.Untitled_32sceneCode.GDRingObjects1) asyncObjectsList.addObject("Ring", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback11769356(runtimeScene, asyncObjectsList)), 11769356, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11770260);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPinObjects1 */
gdjs.Untitled_32sceneCode.GDRingObjects1.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPinObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPinObjects1[i].getBehavior("Animation").setAnimationName("Pin2");
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDRingObjects1Objects, (( gdjs.Untitled_32sceneCode.GDPinObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPinObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDPinObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPinObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRingObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRingObjects1[i].getBehavior("Scale").setScale(0.2);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Untitled_32sceneCode.GDBallObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPinObjects1ObjectsGDgdjs_9546Untitled_959532sceneCode_9546GDFanObjects1ObjectsGDgdjs_9546Untitled_959532sceneCode_9546GDBallEmptyObjects1Objects = Hashtable.newFrom({"Pin": gdjs.Untitled_32sceneCode.GDPinObjects1, "Fan": gdjs.Untitled_32sceneCode.GDFanObjects1, "BallEmpty": gdjs.Untitled_32sceneCode.GDBallEmptyObjects1});
gdjs.Untitled_32sceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10435772);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "hit.wav", false, 100, gdjs.randomInRange(1, 1.1));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Untitled_32sceneCode.GDBallObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWallsObjects1ObjectsGDgdjs_9546Untitled_959532sceneCode_9546GDPiramydObjects1Objects = Hashtable.newFrom({"Walls": gdjs.Untitled_32sceneCode.GDWallsObjects1, "Piramyd": gdjs.Untitled_32sceneCode.GDPiramydObjects1});
gdjs.Untitled_32sceneCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10420748);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "hit.wav", false, 100, 1.4);
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallEmptyObjects1Objects = Hashtable.newFrom({"BallEmpty": gdjs.Untitled_32sceneCode.GDBallEmptyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.Untitled_32sceneCode.GDBallObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPivotObjects2Objects = Hashtable.newFrom({"Pivot": gdjs.Untitled_32sceneCode.GDPivotObjects2});
gdjs.Untitled_32sceneCode.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPivotObjects2, gdjs.Untitled_32sceneCode.GDPivotObjects3);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPivotObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPivotObjects3[i].getBehavior("EllipseMovement").SetRadiusX(-(700), null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPivotObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPivotObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPivotObjects2[i].getBehavior("EllipseMovement").SetRadiusX(700, null);
}
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10427532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Ball"), gdjs.Untitled_32sceneCode.GDBallObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("Pivot"), gdjs.Untitled_32sceneCode.GDPivotObjects2);

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallObjects2Objects, 947, 200, "");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallObjects2[i].getBehavior("Resizable").setSize(80, 80);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(0, 5));
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPivotObjects2Objects, 947, 53, "");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPivotObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPivotObjects2[i].getBehavior("Resizable").setSize(33, 33);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallObjects2[i].getBehavior("Physics2").addDistanceJoint((gdjs.Untitled_32sceneCode.GDBallObjects2[i].getPointX("")), (gdjs.Untitled_32sceneCode.GDBallObjects2[i].getPointY("")), (gdjs.Untitled_32sceneCode.GDPivotObjects2.length !== 0 ? gdjs.Untitled_32sceneCode.GDPivotObjects2[0] : null), (( gdjs.Untitled_32sceneCode.GDPivotObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPivotObjects2[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDPivotObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPivotObjects2[0].getPointY("")), -(1), 0, 1, false, gdjs.VariablesContainer.badVariable);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.randomInRange(0, 1));
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(10427532, gdjs.Untitled_32sceneCode.asyncCallback10427532);
gdjs.Untitled_32sceneCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDBallObjects1) asyncObjectsList.addObject("Ball", obj);
for (const obj of gdjs.Untitled_32sceneCode.GDPivotObjects1) asyncObjectsList.addObject("Pivot", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10427532(runtimeScene, asyncObjectsList)), 10427532, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallEmptyObjects1Objects = Hashtable.newFrom({"BallEmpty": gdjs.Untitled_32sceneCode.GDBallEmptyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallEmptyObjects1Objects = Hashtable.newFrom({"BallEmpty": gdjs.Untitled_32sceneCode.GDBallEmptyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Untitled_32sceneCode.GDBallObjects1});
gdjs.Untitled_32sceneCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Untitled_32sceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fan"), gdjs.Untitled_32sceneCode.GDFanObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fan2"), gdjs.Untitled_32sceneCode.GDFan2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pivot"), gdjs.Untitled_32sceneCode.GDPivotObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallObjects1[i].getBehavior("Physics2").setGravityScale(1.5);
}
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2.5, "", 0);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFanObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFanObjects1[i].getBehavior("Physics2").addRevoluteJoint((gdjs.Untitled_32sceneCode.GDFanObjects1[i].getPointX("")), (gdjs.Untitled_32sceneCode.GDFanObjects1[i].getPointY("")), false, 0, 0, 0, false, 0, 0, gdjs.VariablesContainer.badVariable);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFan2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFan2Objects1[i].getBehavior("Physics2").addRevoluteJoint((gdjs.Untitled_32sceneCode.GDFan2Objects1[i].getPointX("")), (gdjs.Untitled_32sceneCode.GDFan2Objects1[i].getPointY("")), false, 0, 0, 0, false, 0, 0, gdjs.VariablesContainer.badVariable);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallObjects1[i].getBehavior("Physics2").addDistanceJoint((gdjs.Untitled_32sceneCode.GDBallObjects1[i].getPointX("")), (gdjs.Untitled_32sceneCode.GDBallObjects1[i].getPointY("")), (gdjs.Untitled_32sceneCode.GDPivotObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDPivotObjects1[0] : null), (( gdjs.Untitled_32sceneCode.GDPivotObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPivotObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDPivotObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPivotObjects1[0].getPointY("")), -(1), 0, 1, false, runtimeScene.getScene().getVariables().getFromIndex(0));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(0, 5));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Untitled_32sceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fan"), gdjs.Untitled_32sceneCode.GDFanObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fan2"), gdjs.Untitled_32sceneCode.GDFan2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pivot"), gdjs.Untitled_32sceneCode.GDPivotObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFanObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFanObjects1[i].getBehavior("Physics2").applyTorque(-(0.1));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFan2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFan2Objects1[i].getBehavior("Physics2").applyTorque(0.1);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPivotObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPivotObjects1[i].setZOrder(50);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallObjects1[i].setZOrder(50);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Untitled_32sceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zone1"), gdjs.Untitled_32sceneCode.GDZone1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDZone1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__CameraZoom__ZoomWithSpeed.func(runtimeScene, 3, "", 0, null);
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Untitled_32sceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pin"), gdjs.Untitled_32sceneCode.GDPinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallObjects1Objects, "Physics2", gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPinObjects1Objects, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Untitled_32sceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("BallEmpty"), gdjs.Untitled_32sceneCode.GDBallEmptyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fan"), gdjs.Untitled_32sceneCode.GDFanObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pin"), gdjs.Untitled_32sceneCode.GDPinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallObjects1Objects, "Physics2", gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPinObjects1ObjectsGDgdjs_9546Untitled_959532sceneCode_9546GDFanObjects1ObjectsGDgdjs_9546Untitled_959532sceneCode_9546GDBallEmptyObjects1Objects, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Untitled_32sceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Piramyd"), gdjs.Untitled_32sceneCode.GDPiramydObjects1);
gdjs.copyArray(runtimeScene.getObjects("Walls"), gdjs.Untitled_32sceneCode.GDWallsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallObjects1Objects, "Physics2", gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWallsObjects1ObjectsGDgdjs_9546Untitled_959532sceneCode_9546GDPiramydObjects1Objects, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Untitled_32sceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pivot"), gdjs.Untitled_32sceneCode.GDPivotObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "start.wav", false, 100, 1);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPivotObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPivotObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallObjects1[i].getBehavior("Physics2").removeJoint(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Untitled_32sceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pivot"), gdjs.Untitled_32sceneCode.GDPivotObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zone1"), gdjs.Untitled_32sceneCode.GDZone1Objects1);
gdjs.Untitled_32sceneCode.GDBallEmptyObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "end.wav", false, 100, 1);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2.5, "", 0);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallObjects1[i].getBehavior("Physics2").setGravityScale(1.5);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDZone1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDZone1Objects1[i].setY(1908);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallEmptyObjects1Objects, (( gdjs.Untitled_32sceneCode.GDBallObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBallObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDBallObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBallObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallEmptyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallEmptyObjects1[i].getBehavior("Resizable").setSize(80, 80);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallEmptyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallEmptyObjects1[i].setAngle((( gdjs.Untitled_32sceneCode.GDBallObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBallObjects1[0].getAngle()));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPivotObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPivotObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BallEmpty"), gdjs.Untitled_32sceneCode.GDBallEmptyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallEmptyObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBallEmptyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallEmptyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallEmptyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Untitled_32sceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("BallEmpty"), gdjs.Untitled_32sceneCode.GDBallEmptyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallEmptyObjects1Objects, "Physics2", gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBallObjects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBallEmptyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallEmptyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallEmptyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDPinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPinObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPinObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDPinObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDBallObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBallObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBallObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBallObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDBallObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDWallsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWallsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWallsObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDWallsObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDWallsObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDPiramydObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPiramydObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPiramydObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPiramydObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDPiramydObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDFanObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFanObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFanObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDFanObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDFanObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDPivotObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPivotObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPivotObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPivotObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDPivotObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDArmObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDArmObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDArmObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDArmObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDArmObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDBaseObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBaseObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBaseObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBaseObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDBaseObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDFan2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDFan2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDFan2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDFan2Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDFan2Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDLineaObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLineaObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLineaObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDLineaObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDLineaObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDZone1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDZone1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDZone1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDZone1Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDZone1Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDRingObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRingObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRingObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDRingObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDRingObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDZone2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDZone2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDZone2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDZone2Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDZone2Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDBallEmptyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBallEmptyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBallEmptyObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBallEmptyObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDBallEmptyObjects5.length = 0;

gdjs.Untitled_32sceneCode.eventsList13(runtimeScene);
gdjs.Untitled_32sceneCode.GDBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDPinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPinObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPinObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDPinObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDBallObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBallObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBallObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBallObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDBallObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDWallsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWallsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWallsObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDWallsObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDWallsObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDPiramydObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPiramydObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPiramydObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPiramydObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDPiramydObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDFanObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFanObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFanObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDFanObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDFanObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDPivotObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPivotObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPivotObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPivotObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDPivotObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDArmObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDArmObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDArmObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDArmObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDArmObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDBaseObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBaseObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBaseObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBaseObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDBaseObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDFan2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDFan2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDFan2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDFan2Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDFan2Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDLineaObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLineaObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLineaObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDLineaObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDLineaObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDZone1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDZone1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDZone1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDZone1Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDZone1Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDRingObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRingObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRingObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDRingObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDRingObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDZone2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDZone2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDZone2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDZone2Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDZone2Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDBallEmptyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBallEmptyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBallEmptyObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBallEmptyObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDBallEmptyObjects5.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
