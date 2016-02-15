/**
 * toggledMenu method js for svedala kommun
 */
window.ToggledMenu = (function() {
    'use strict';

    var dropDownMenus = {

        /*Metod som ska toggla' de olika menyvalen i dropdown-menyn när man klickar på dem*/
        "toggleMenu": function() {

            document.addEventListener('click', function(event) {

                switch (event.target.id) {

                    case 'shortLink':
                    case 'shortLinkText':
                    case 'slButton':
                    case 'shortLinkButton':
                        document.getElementById("shortLinkDropDown").classList.toggle("hide");
                        break;
                    case 'boxShadow1':
                    case 'bo':
                    case 'menuLinkWrapper1':
                    case 'arrow1':
                        console.log('inne i case menuPic1');
                        document.getElementById("dropDown1").classList.toggle("hide");
                        document.getElementById("dropDown2").classList.add("hide");
                        document.getElementById("dropDown3").classList.add("hide");
                        document.getElementById("dropDown4").classList.add("hide");

                        break;
                    case 'boxShadow2':
                    case 'naringsLiv':
                    case 'menuLinkWrapper2':
                    case 'arrow2':
                        console.log('inne i case menuPic2');
                        document.getElementById("dropDown2").classList.toggle("hide");
                        document.getElementById("dropDown1").classList.add("hide");
                        document.getElementById("dropDown3").classList.add("hide");
                        document.getElementById("dropDown4").classList.add("hide");
                        break;
                    case 'boxShadow3':
                    case 'paverka':
                    case 'menuLinkWrapper3':
                    case 'arrow3':
                        console.log('inne i case menuPic3');
                        document.getElementById("dropDown3").classList.toggle("hide");
                        document.getElementById("dropDown1").classList.add("hide");
                        document.getElementById("dropDown2").classList.add("hide");
                        document.getElementById("dropDown4").classList.add("hide");
                        break;
                    case 'boxShadow4':
                    case 'uppleva':
                    case 'menuLinkWrapper4':
                    case 'arrow4':
                        console.log('inne i case menuPic4');
                        document.getElementById("dropDown4").classList.toggle("hide");
                        document.getElementById("dropDown1").classList.add("hide");
                        document.getElementById("dropDown2").classList.add("hide");
                        document.getElementById("dropDown3").classList.add("hide");
                        break;
                    default:
                        console.log('inne i default');
                        document.getElementById("dropDown1").classList.add("hide");
                        document.getElementById("dropDown2").classList.add("hide");
                        document.getElementById("dropDown3").classList.add("hide");
                        document.getElementById("dropDown4").classList.add("hide");
                        document.getElementById("shortLinkDropDown").classList.add("hide");
                }
            });
        }
    };

    return dropDownMenus;
})();
