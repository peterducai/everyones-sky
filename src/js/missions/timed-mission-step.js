class TimedMissionStep extends MissionStep {

    attach() {
        let timeleft = this.maxTime;
        this.listen(EVENT_CYCLE, e => {
            if ((timeleft -= e) < 0) {
                G.missionDone(false);
            }
        });

        G.showPrompt(() => this.instructions() + ' (' + formatTime(timeleft) + ')');
    }

}