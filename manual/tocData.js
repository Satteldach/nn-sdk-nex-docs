{
  var objTOC = new TocObject();
  // Document title.
  objTOC.setTitle("NX NEX Manual");
  // Link to document title.
  objTOC.setTitleFile("title.html");
  // Specify true to expand the table of contents on launch. If not specified, the value is false.
  objTOC.setOpenWithExpand(true);
  // To auto-number the chapters.
  objTOC.enableDisplayNumber();
  // To not display icons for lists that do not expand and collapse.
  objTOC.disableViewFileIcon();

  // Reset the numbering base.
  objTOC.setBaselevel(0);
  // Readme
// 
  objTOC.addItem("README", 0, "Readme", "nex/readme-nx-nex.html", "");
// 

  objTOC.addSeparator();

  // Manual table of contents.
  // Use the second level as the base.
  objTOC.setBaselevel(1);
  objTOC.addSectionHeader(         "GENERAL"         , 0, "General Features", "", "");
  objTOC.addSection(  "GENERAL_FIRST_OF_ALL", 1, "Introduction" , "nex/common/first_of_all.html", "");
  objTOC.addSection(        "GENERAL_INIT_FIN", 1, "NEX Initialization and Shutdown"         , "nex/common/init_final.html", "");
  objTOC.addSection(        "GENERAL_MEMORY", 1, "Memory Management"         , "nex/common/memory.html", "");
  objTOC.addSection(        "GENERAL_INITIALIZE", 1, "Initialization Settings (Thread Models, Exclusive Locking, Log Output)"         , "nex/common/initialize_detail.html", "");
  objTOC.addSection(        "GENERAL_OVERALL", 1, "NEX Library: General (Basic Types, Dispatching, Asynchronous Processing, Data Integrity)" , "nex/common/overall.html", "");
  objTOC.addSection(        "GENERAL_POLLING_ITEM", 1, "Required and Recommended Period Item Checks" , "nex/common/polling_item.html", "");
  
  objTOC.addSectionHeader(         "SERVER"         , 0, "Server Service Features", "", "");
  objTOC.addSection(  "SERVER_FIRST_OF_ALL", 1, "Introduction"     , "nex/serverservice/first_of_all.html", "");
  objTOC.addSection(        "SERVER_USER", 1, "User Management"     , "nex/serverservice/user_account_management.html", "");
  objTOC.addSection(        "SERVER_LOGIN", 1, "Managing Connections"     , "nex/serverservice/login_logout.html", "");
  objTOC.addSection(        "SERVER_MATCHMAKE", 1, "Matchmaking"     , "nex/serverservice/matchmake.html", "");
  objTOC.addSection(        "SERVER_RANKING", 1, "Ranking"     , "nex/serverservice/ranking.html", "");
  objTOC.addSection(        "SERVER_RANKING2", 1, "Ranking2"     , "nex/serverservice/ranking2.html", "");
  objTOC.addSection(        "SERVER_DATASTORE", 1, "DataStore"     , "nex/serverservice/datastore.html", "");
  objTOC.addSection(        "SERVER_SUBSCRIBER", 1, "Subscriber"     , "nex/serverservice/subscriber.html", "");
// 
  objTOC.addSection(        "SERVER_DEBUG", 1, "Debug Assistance"     , "nex/serverservice/debug.html", "");
  objTOC.addSection(        "SERVER_UTILITY", 1, "Utilities"     , "nex/serverservice/utility.html", "");
  objTOC.addSection(        "SERVER_WEBAPI" , 1, "WebAPI"  , "nex/serverservice/webapi.html", "");
  objTOC.addSection(        "SERVER_WEBAPI_COMMON" , 2, "Using WebAPI"  , "nex/serverservice/webapi_common.html", "");
  objTOC.addSection(        "SERVER_WEBAPI_MATCHMAKE" , 2, "Matchmaking"  , "nex/serverservice/webapi_matchmake.html", "");
// 
  objTOC.addSection(        "SERVER_WEBAPI_RANKING2" , 2, "Ranking2"  , "nex/serverservice/webapi_ranking2.html", "");
  objTOC.addSection(        "SERVER_WEBAPI_DATASTORE" , 2, "DataStore"  , "nex/serverservice/webapi_datastore.html", "");
  objTOC.addSection(        "SERVER_WEBAPI_SUBSCRIBER" , 2, "Subscriber"  , "nex/serverservice/webapi_subscriber.html", "");
  objTOC.addSection(        "SERVER_WEBAPI_DEBUG" , 2, "WebAPI Debug Assistance"  , "nex/serverservice/webapi_debug.html", "");
  objTOC.addSection(        "SERVER_WEBAPI_UTILITY" , 2, "Utilities"  , "nex/serverservice/webapi_utility.html", "");
// 
  objTOC.addSection(        "SERVER_WORDS", 1, "Glossary"     , "nex/serverservice/words.html", "");

  objTOC.addSectionHeader(         "P2P"         , 0, "Real-Time Communication Feature", "", "");

  objTOC.addSection(        "P2P_VSOCKET", 1, "VSocket", "nex/realtime/vsocket.html", "");
  objTOC.addSection(        "P2P_NAT_TRAVERSAL", 1, "NAT Traversal", "nex/realtime/nat_traversal.html", "");


  objTOC.addSectionHeader(         "NINTENDO_SWITCH_ONLINE_VOICECHAT"         , 0, "Nintendo Switch Online Voice Chat Feature", "", "");
  objTOC.addSection(  "NINTENDO_SWITCH_ONLINE_VOICECHAT_FIRST_OF_ALL", 1, "Introduction" , "nex/smartdevicevoicechat/first_of_all.html", "");
  objTOC.addSection(        "NINTENDO_SWITCH_ONLINE_VOICECHAT_MATCHMAKE_VOICECHAT", 1, "Matchmaking Voice Chat", "nex/smartdevicevoicechat/matchmakevoicechat.html", "");
  objTOC.addSection(        "NINTENDO_SWITCH_ONLINE_VOICECHAT_WORDS", 1, "Glossary", "nex/smartdevicevoicechat/words.html", "");


  objTOC.addSectionHeader(  "NEX_API" , 0, "API Reference"  , "nex/api/index.html", "");

  objTOC.addSectionHeader(  "SAMPLE_DEMOS", 0, "Sample Demos", "nex/sampledemos.html", "");

  // Reset the numbering base.
  objTOC.setBaselevel(0);
  // Revision History
  objTOC.addSeparator();
  objTOC.addItem("History", 0, "Revision History", "nex/history.html", "");
  objTOC.addItem("History", 0, "Changes From NEX 3.x", "nex/difference_from_nex_3_x.html", "");

  // Process tree data.
  objTOC.processTreeData();
  Reassemble.objectTocData = objTOC;
}

