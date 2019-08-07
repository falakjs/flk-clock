const Component = require(COMPONENT_CLASS_PATH);

class FlkClockComponent extends Component {}

module.exports = {
    selector: 'flk-clock',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: FlkClockComponent,
    isUnique: false,
    component: 'FlkClock',
    htmlFile: __dirname + '/../../flk-clock.component.html',
};