import { StartFunc as StartFuncForColumns } from "./ForColumns/EntryFile.js";
import { StartFunc as StartFuncForOnPostBody } from "./onPostBody/EntryFile.js";

const StartFunc = async () => {
    var $table = $('#table');
    let jVarLocalColumnsData = await StartFuncForColumns();
    let jVarLocalColumnsForTable = [...jVarLocalColumnsData, {
        field: "KS-Options",
        title: "Options"
    }];

    jFLocalBuildFooter({ inColumns: jVarLocalColumnsData });

    $table.bootstrapTable({
        data: [],
        columns: jVarLocalColumnsForTable,
        onPostBody: StartFuncForOnPostBody
    });
};

const jFLocalBuildFooter = ({ inColumns }) => {
    let jVarLocalFooterTrId = document.getElementById("tableFooterId");

    inColumns.forEach(element => {
        let localtd = document.createElement("td");
        let localinput = document.createElement("input");
        localinput.type = 'text';
        localinput.classList.add('form-control');
        localinput.id = element.field;
        localinput.placeholder = 'Enter ' + element.field;
        localtd.appendChild(localinput);

        jVarLocalFooterTrId.appendChild(localtd);
    });

    let localtd = document.createElement("td");
    let localButton = document.createElement("button");
    localButton.classList.add('form-control');
    localButton.innerHTML = "Save";
    localButton.id = "TableFooterSaveButtonId";

    // localButton.addEventListener("click", jFLocalButtonSaveClick);

    localtd.appendChild(localButton);

    jVarLocalFooterTrId.appendChild(localtd);
};

let jFLocalButtonSaveClick = () => {
    console.log("zzzzzzzzzzz");

};

export { StartFunc };
