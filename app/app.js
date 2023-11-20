import { changePage } from "../model/model.js";

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    changePage(hashTag, pageID)
}

function initListeners() {
    console.log("Test");
}

function initUrlListeners() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    initListeners();
    initUrlListeners();
    if ($(window).width() <= 768) {
        $('#hero').removeClass('heroImg');
    }
})

var initialDescCount = 3;
var initialInstrCount = 3;
var recipes = [];

function initListeners() {
  $(".addBtn").on("click", (e) => {
    initialDescCount++;
    $(".formDesc").append(
      `<input id="desc0" type="text" placeholder="Description ${initialDescCount}" id="desc${
        initialDescCount - 1
      }" />`
    );
  });
  $(".addBtn2").on("click", (e) => {
    initialInstrCount++;
    $(".formInstr").append(
      `<input id="instr0" type="text" placeholder="Instruction ${initialInstrCount}" id="desc${
        initialInstrCount - 1
      }" />`
    );
  });

  $(".submitbtn").on("click", (e) => {
    let newItemObj = {};

    let imagePath = $("#imagePath").val();
    let itemName = $("#itemName").val();
    newItemObj.imagePath = imagePath;
    newItemObj.itemName = itemName;

    newItemObj.descriptions = [];

    console.log("newItemObj ", newItemObj);
    $(".formDesc input").each(function (index, data) {
      var value = $(this).val();
      let keyName = "description" + index;
      let descObj = {};
      descObj[keyName] = value;

      newItemObj.descriptions.push(descObj);
      console.log("desc ", newItemObj);

    });
    $(".formInstr input").each(function (index, data) {
      var value = $(this).val();
      console.log("instr " + value);
    });
  });
}

$(document).ready(function () {
  initListeners();
});



