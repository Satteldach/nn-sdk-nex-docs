/*
* Region-specific strings used in the JavaScript
 */
var LocaleString = function() {};

//
LocaleString.lcStrMessageNeedJQuery = "jQuery is required to execute scripts.";
LocaleString.lcStrMessageNothingToc = "The TOC data file (" + TemplateSettings.templateTocFileName + ") has incorrect content.";

// 
LocaleString.lcStrLabelModeAll  = "All";
LocaleString.lcStrLabelModeDesc = "Backgrounder Only";
LocaleString.lcStrLabelModeItem = "Guideline Items Only";

// Package selection.
LocaleString.lcStrLabelExcludeByFramework = "Developers who use {package} do not need to consider this item.";
LocaleString.lcStrLabelExcludeByUnsupport = "This feature cannot be used in {package}.";
LocaleString.lcStrLabelExcludeByStandard = "You do not need to consider this item when using {package}.";

LocaleString.lcStrLabelExclude = {
    "F" : [LocaleString.lcStrLabelExcludeByFramework, false],
    "U" : [LocaleString.lcStrLabelExcludeByUnsupport, false],
    "S" : [LocaleString.lcStrLabelExcludeByStandard, false],
    "D" : ["This will be removed.", false],
    "V" : ["", true]
};

// Title of the print page display settings.
LocaleString.lcStrLabelPrintSetting = "Print page display settings.";
// ToolTip for the print page display settings.
LocaleString.lcStrLabelPrintSettingToolTip = "Before printing, include the background color and image in the printout in the Page Settings in the Print dialog box.";
// Notes when running the page for printing.
LocaleString.lcStrAlertGoPrintPage = "It can take time before it appears.";
// Default print page selector
LocaleString.lcStrLabelSelectChapter = "-- Output selected content on one page --";
// Output all pages for print page selector
LocaleString.lcStrLabelSelectAll     = "(All)";

// Figure numbering prefix
LocaleString.lcStrLabelFigure = "Figure ";
LocaleString.lcStrLabelTable = "Table ";
LocaleString.lcStrLabelCode = "Code ";

// Link created at top of auto-generated TOC
LocaleString.lcStrLabelAcTopLevel = "(To top of page)";

// Search Page
LocaleString.lcStrMessageSearching = "Searching. Please wait...";
LocaleString.lcStrLabelSearchResult = "Search results: %r% Hits";
LocaleString.lcStrLabelSearchView = "(Displaying hits %s% - %e%)";
LocaleString.lcStrLabelSearchPrev = "Display previous %c% hits";
LocaleString.lcStrLabelSearchNext = "Display next %c% hits";

// Search button
LocaleString.lcStrLabelStartSearch = "Find";

// Guideline item name
LocaleString.lcStrLabelDefinition = "Guideline Item";
LocaleString.lcStrLabelTestMethod = "Test Method";
LocaleString.lcStrLabelCriterion = "Pass/Fail Determination";
LocaleString.lcStrLabelTestObject = "Software to Be Tested";
LocaleString.lcStrLabelExclusion = "Exceptions";
LocaleString.lcStrLabelRemarks = "Comments";

LocaleString.lcStrOpenDescendants = "Hold the CTRL key while clicking to open all.";
LocaleString.lcStrOpenViewer = "Click to zoom in.";
LocaleString.lcStrLinkJump = "Click to open the link destination.";

LocaleString.lcStrTopPageName = "Title Sheet";


// Confirmation message for Chrome.
LocaleString.lcStrAlertPrintPageByChrome = "The page to print might not appear correctly when opening local HTML files in Google Chrome.";
LocaleString.lcStrConfirmDownloadByChrome = "Downloading might not occur when opening local HTML files in Google Chrome. \nDownload anyway?";

// Related Links
LocaleString.lcStrRelatedLinks = "Related Links";

// Permalinks
LocaleString.lcStrPermalink = "Link to this header.";

// For guidelines.
LocaleString.lcStrTitlePicker = "You can click to highlight the title string.";

// Open/Close All
LocaleString.lcStrTitleOpenAll = "Open All";
LocaleString.lcStrTitleCloseAll = "Close All";

