// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Alpha_ABS_build","status":true,"description":"(1232)[Basic] The real - time action battle system","parameters":{"Alpha ABS":"","spacer|interface":"","Interface":"","UI_Visible":"true","NewDescriptionStyle":"false","UI_PlayerDamageColor":"#FF0000","AllowBloodSplatter":"true","BS_Picture":"ScreenBlood","BS_Color":"#F98822","BS_Opacity":"124","BS_HpRate":"15","Show Mini HP Bars":"Only for selected","ShowPlayerPopUp":"true","UseNewDamagePopUp":"true","ShowItemNotifyOnNONABS":"true","UIE_Buttons":"true","UIE_ButtonsCustom":"","Preview Targets":"true","Preview Targets When Selected":"true","Preview Extra Targets":"true","spacer|mapWindows":"","MapWindows":"","MapInventorySystem":"","MapInventory":"true","MapInventoryOnNonABS":"true","ShowEquipedItemsInInventory":"true","MapInventoryDrag":"true","MapInventorySortEquip":"true","MapInventorySortItems":"true","MapInventoryUseSlider":"true","MapInventoryWeightSystem":"true","wSystemVariableId":"1","wSystemAutoStateId":"0","wSystemAllowSlowDown":"false","MapInventoryPauseGame":"true","AllowEquipsStats":"true","ShowFullEquipedStats":"false","AllowPartySelect":"true","AllowAutoRefreshUsable":"true","AllowStoreInChest":"true","AllowRareItemSystem":"true","UseImageIconsInWindows":"true","GoldItem":"0","UseCustomCellsSize":"false","CustomCellSettings:struct":"{\"iconSize:i\":\"30\",\"columnsPerPage:i\":\"5\",\"rowsPerPage:i\":\"5\",\"iconMode:i\":\"1\"}","MapSkillWindowSystem":"","MapSkillWindow":"true","MapSkillWindowDrag":"true","AllowAutoRefreshUsableSkills":"true","MapSkillWindowParty":"true","MapStatusWindow":"true","spacer|enemies":"","Enemies":"","Enemy Dead Switch":"B","Auto loot":"true","Visual loot":"true","ShowEnemyLevel":"true","ShowEnemyHPInPercent":"true","BarrierPiercedDamage":"false","Enemy Spawn Map Id":"0","Encounters Spawn Radius":"6","spacer|defAnimations":"","Animations":"","Revive Animation":"49","Teleport Animation":"51","Cast Animation":"0","Cast Animation SE":"true","Level Up Animation":"49","Encounter Animation":"45","spacer|altInput":"","Alternative Input":"","Alter Move":"false","Move By Mouse":"true","Attack By Mouse":"false","spacer|deathSettings":"","PlayerDeathSettings":"","Game Over Map ID":"0","Game Over Map Direction":"down","Game Over Map Position":"{\"X\":\"0\",\"Y\":\"0\"}","Game Over Common Event":"0","After Death Common Event":"0","Party Member Death CE":"0","spacer|performance":"","Performance":"","Use_AStar":"true","AI Think Interval":"300","SimpleSkillPanel":"false","spacer|extra":"","Other Features":"","UseDiagonalMovement":"true","Gamepad Support":"false","mapScrolling:s":"{\"isEnabledOnAbs:b\":\"false\",\"isEnabledOnNonAbs:b\":\"false\",\"screenSize:int\":\"10\",\"scrollSpeed:int\":\"5\",\"scrollDelay:int\":\"30\"}","spacer|party":"","partyHeader":"","Keep Summon Unit When Transfer?":"false","Party Members is Selectable":"true","Party experience":"Share at all","spacer|common":"","Commons Settings":"","Allow Transfrer":"false","Solid Regions":"0","AutoBindItems":"true","RandomTPAtStart":"true","ScreenShakeOnDamage":"false","PostUseSkillTime":"20","Dashing tilt":"false","Jumping tilt":"true","spacer|xAnima":"","xAnimaHeader":"","xAnimations:structA":"[\"{\\\"id\\\":\\\"Harold\\\",\\\"base:s\\\":\\\"{\\\\\\\"move:s\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"isOneDirection:b\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"frames:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"5\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"speed:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"19\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"expandFirstFrame:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"idle:s\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"isOneDirection:b\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"frames:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"speed:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"12\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"expandFirstFrame:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"moveToIdleDelay:i\\\\\\\":\\\\\\\"4\\\\\\\"}\\\",\\\"inBattle:s\\\":\\\"\\\",\\\"dead:s\\\":\\\"\\\",\\\"actions:structA\\\":\\\"[]\\\"}\",\"{\\\"id\\\":\\\"Harold_Sword\\\",\\\"base:s\\\":\\\"{\\\\\\\"move:s\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"isOneDirection:b\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"frames:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"5\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"speed:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"19\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"expandFirstFrame:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"idle:s\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"isOneDirection:b\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"frames:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"speed:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"12\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"expandFirstFrame:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"moveToIdleDelay:i\\\\\\\":\\\\\\\"4\\\\\\\"}\\\",\\\"inBattle:s\\\":\\\"{\\\\\\\"move:s\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"isOneDirection:b\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"frames:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"5\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"speed:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"19\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"expandFirstFrame:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"idle:s\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"isOneDirection:b\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"frames:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"speed:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"12\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"expandFirstFrame:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"moveToIdleDelay:i\\\\\\\":\\\\\\\"4\\\\\\\"}\\\",\\\"dead:s\\\":\\\"\\\",\\\"actions:structA\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"name\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"Attack\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"animation:s\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"{\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"isOneDirection:b\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"frames:i\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"3\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"speed:i\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"8\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"expandFirstFrame:i\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"3\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"is8Way:b\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"dx:int\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"dy:int\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"{\\\\\\\\\\\\\\\"name\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"Defense\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"animation:s\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"{\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"isOneDirection:b\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"frames:i\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"speed:i\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"10\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"expandFirstFrame:i\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"{\\\\\\\\\\\\\\\"name\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"Skill\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"animation:s\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"{\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"isOneDirection:b\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"frames:i\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"speed:i\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"20\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"expandFirstFrame:i\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}\\\\\\\\\\\\\\\"}\\\\\\\"]\\\"}\",\"{\\\"id\\\":\\\"Bat\\\",\\\"base:s\\\":\\\"{\\\\\\\"move:s\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"isOneDirection:b\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"frames:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"5\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"speed:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"19\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"expandFirstFrame:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"idle:s\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"isOneDirection:b\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"frames:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"4\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"speed:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"12\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"expandFirstFrame:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"moveToIdleDelay:i\\\\\\\":\\\\\\\"4\\\\\\\"}\\\",\\\"inBattle:s\\\":\\\"{\\\\\\\"move:s\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"isOneDirection:b\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"frames:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"5\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"speed:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"19\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"expandFirstFrame:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"idle:s\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"isOneDirection:b\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"frames:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"4\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"speed:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"12\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"expandFirstFrame:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"moveToIdleDelay:i\\\\\\\":\\\\\\\"4\\\\\\\"}\\\",\\\"dead:s\\\":\\\"{\\\\\\\"move:s\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"isOneDirection:b\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"true\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"frames:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"speed:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"15\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"expandFirstFrame:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"idle:s\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"isOneDirection:b\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"true\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"frames:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"speed:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"15\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"expandFirstFrame:i\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"moveToIdleDelay:i\\\\\\\":\\\\\\\"1\\\\\\\"}\\\",\\\"actions:structA\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"name\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"Attack\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"animation:s\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"{\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"isOneDirection:b\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"frames:i\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"3\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"speed:i\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"5\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"expandFirstFrame:i\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}\\\\\\\\\\\\\\\"}\\\\\\\"]\\\"}\"]"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"PKD_MapInventory","status":true,"description":"(v.1.9)[BASIC] Visual Map Inventory","parameters":{"OpenMapInventoryKey":"i","TakeAllChestKey":"t","spacer|inventorySettings":"","headerInventorySettings":"","ShowEquipedItemsInInventory":"true","MapInventoryDrag":"true","MapInventorySortEquip":"true","MapInventorySortItems":"true","AllowAutoRefreshUsable":"true","UseSlider":"true","AllowPartySelect":"true","AllowNonBattlePartyMembers":"false","StaticDescPosition:b":"false","StaticDescPosXY:struct":"{\"x:e\":\"0\",\"y:e\":\"0\"}","spacer|chestsSettings":"","headerChestsSettings":"","AllowStoreInChest":"true","GoldItem:i":"0","spacer|weightSystem":"","UseWSystem":"false","wSystemVariableId":"1","wSystemAutoStateId":"0","wSystemAllowSlowDown":"false","spacer|limitedSystem":"","UseLimitedCellsSystem:b":"false","lcVariableItems:int":"1","lcVariableWeapons:int":"1","lcVariableArmors:int":"1","lsIgnoreLimitByGainItems:b":"true","spacer|screenButton":"","UseScreenButton":"true","spacer|rareItemsSystem":"","AllowRareItemSystem":"true","spacer|equipStatsSystem":"","AllowEquipsStats":"true","ShowFullEquipedStats":"false","spacer|outerItemsSystem":"","AllowOuterItems":"false","OIHotKeyText:struct":"{\"visible:bool\":\"true\",\"size:struct\":\"{\\\"w:int\\\":\\\"22\\\",\\\"h:int\\\":\\\"20\\\"}\",\"margins:struct\":\"{\\\"x:int\\\":\\\"10\\\",\\\"y:int\\\":\\\"18\\\"}\",\"alignment:str\":\"right\",\"outline:struct\":\"{\\\"color:css\\\":\\\"\\\",\\\"width:int\\\":\\\"2\\\"}\",\"font:struct\":\"{\\\"face:str\\\":\\\"Consolas\\\",\\\"size:int\\\":\\\"14\\\",\\\"italic:bool\\\":\\\"false\\\"}\",\"textColor:css\":\"#F9E159\"}","OIHotKeyEnable:bool":"true","OIHotCells:structA":"[\"{\\\"key:str\\\":\\\"1\\\",\\\"pos:struct\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"40\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"560\\\\\\\"}\\\"}\", \"{\\\"key:str\\\":\\\"2\\\",\\\"pos:struct\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"80\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"560\\\\\\\"}\\\"}\", \"{\\\"key:str\\\":\\\"3\\\",\\\"pos:struct\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"120\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"560\\\\\\\"}\\\"}\", \"{\\\"key:str\\\":\\\"f\\\",\\\"pos:struct\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"560\\\\\\\"}\\\"}\"]","spacer|cellsSystem":"","headerCellsSettings":"","UseImageIconsInWindows:b":"true","UseCustomCellsSize:b":"false","CustomCellSettings:struct":"{\"iconSize:i\":\"30\",\"columnsPerPage:i\":\"5\",\"rowsPerPage:i\":\"5\",\"iconMode:i\":\"1\"}","spacer|extraDescriptions":"","ExtraDescriptions:structA":"[]","spacer|throwOutSystem":"","AllowThrowOutSystem:b":"true","ThrowOutSettings:struct":"{\"margins:struct\":\"{\\\"x:int\\\":\\\"15\\\",\\\"y:int\\\":\\\"350\\\"}\",\"startOpacity:int\":\"175\",\"fadeOutSpeed:int\":\"5\",\"throwOutSE\":\"Wind7\"}"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_CoreEngine","status":false,"description":"v1.32 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"false","Scale Title":"false","Scale Game Over":"false","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"false","Show Events Snapshot":"false","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_QuestJournal","status":true,"description":"v1.02 Insert a quest journal system into your game!","parameters":{"---Main Menu---":"","Quest Command":"Quest","Show Command":"true","Enable Command":"true","Auto Place Command":"true","---Quest Menu---":"","Quest Category Window":"{\"---Categories---\":\"\",\"Category Order\":\"[\\\"available\\\",\\\"completed\\\",\\\"failed\\\",\\\"all\\\"]\",\"Available Text\":\"\\\\i[371]Available (%1)\",\"Completed Text\":\"\\\\i[387]Completed (%1)\",\"Failed Text\":\"\\\\i[388]Failed (%1)\",\"All Text\":\"\\\\i[372]All Quests (%1)\",\"Cancel Text\":\"\\\\i[161]Close\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"this.fittingHeight(this.numVisibleRows())\",\"Rows\":\"4\",\"Columns\":\"1\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"left\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest List Window":"{\"---Types---\":\"\",\"Show Types\":\"true\",\"Type Order\":\"[\\\"\\\\\\\\c[6]Main Quests\\\",\\\"\\\\\\\\c[4]Side Quests\\\",\\\"\\\\\\\\c[3]Character Quests\\\",\\\"\\\\\\\\c[5]Tutorial Quests\\\"]\",\"List Open Symbol\":\"-\",\"List Closed Symbol\":\"+\",\"Type Text Format\":\"%1%2 (%3)\",\"Quest Indent\":\"0\",\"Show Empty\":\"false\",\"Read Quest\":\"\\\\i[121]Read Quest\",\"Cancel\":\"\\\\i[16]Cancel\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(4)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Type Alignment\":\"left\",\"Quest Alignment\":\"left\",\"Window Skin\":\"Window\"}","Quest Title Window":"{\"---Window Settings---\":\"\",\"No Quest Title\":\"\\\\c[4]Quest Journal\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"center\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest Data Window":"{\"---Data Settings---\":\"\",\"No Data Text\":\"\\\"Welcome to the \\\\\\\\c[4]Quest Journal\\\\\\\\c[0].\\\\n\\\\nHere, you can review over the various\\\\nquests given to you by people from all\\\\nover the world.\\\"\",\"Quest Data Format\":\"\\\"<WordWrap>\\\\\\\\{%1\\\\\\\\}\\\\n<br>\\\\\\\\c[4]Level:\\\\\\\\c[0] %2\\\\n<br>\\\\\\\\c[4]From:\\\\\\\\c[0] %3\\\\n<br>\\\\\\\\c[4]Location:\\\\\\\\c[0] %4\\\\n<br>\\\\n<br>\\\\\\\\c[4]Description:\\\\\\\\c[0]\\\\n<br>%5\\\\n<br>\\\\n<br>\\\\\\\\c[4]Objectives:\\\\\\\\c[0]\\\\n<br>%6\\\\n<br>\\\\n<br>\\\\\\\\c[4]Rewards:\\\\\\\\c[0]\\\\n<br>%7\\\\n<br>\\\\n<br>%8\\\"\",\"Uncleared Objective\":\"\\\\i[368]%1\",\"Completed Objective\":\"\\\\i[384]%1\",\"Failed Objective\":\"\\\\i[400]%1\",\"Unclaimed Reward\":\"\\\\i[368]%1\",\"Claimed Reward\":\"\\\\i[416]%1\",\"Denied Reward\":\"\\\\i[400]%1\",\"Load Delay\":\"30\",\"---Window Settings---\":\"\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\",\"Scroll Speed\":\"4\"}","Lunatic Mode":"{\"---Quest Menu---\":\"\",\"Before Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\\n//\\\\n// background.bitmap = ImageManager.loadTitle1(\\\\\\\"Book\\\\\\\");\\\\n// this.fitScreen(background);\\\"\",\"After Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"Close Quest Menu\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"---Quest Status---\":\"\",\"Quest Add\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being added\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully added!')\\\"\",\"Quest Remove\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being removed\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully removed!')\\\"\",\"Quest Complete\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to completed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Completed!')\\\"\",\"Quest Fail\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to failed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Failed!')\\\"\",\"Quest Available\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to available\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Available!')\\\"\",\"---Description---\":\"\",\"Change Description\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose description is changed\\\\n//   index - Description index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' description index changed to ' + index)\\\"\",\"---Objectives---\":\"\",\"Show Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to shown!')\\\"\",\"Hide Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to hidden!')\\\"\",\"Complete Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being completed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to completed!')\\\"\",\"Fail Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective having failed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to failed!')\\\"\",\"Normalize Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to normal!')\\\"\",\"---Rewards---\":\"\",\"Show Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes shown!')\\\"\",\"Hide Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes hidden!')\\\"\",\"Claim Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming claimed\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now claimed!')\\\"\",\"Deny Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming denied\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now denied!')\\\"\",\"Normalize Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is normalized!')\\\"\",\"---Subtext---\":\"\",\"Change Subtext\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose subtext is changed\\\\n//   index - Subtext index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' subtext index changed to ' + index)\\\"\"}","---Quest List---":"","Quest 1":"{\"Title\":\"\\\\i[87]Awal Petualangan\",\"Type\":\"Main Quests\",\"Difficulty\":\"Easy Peasy\",\"From\":\"Theo\",\"Location\":\"Hutan Hogwart\",\"Description\":\"[\\\"\\\\\\\"Theo memintamu untuk mendapatkan \\\\\\\\\\\\\\\\i[386]\\\\\\\\\\\\\\\\c[4]Slime Liquid\\\\\\\\\\\\\\\\c[0] dari \\\\\\\\\\\\\\\\c[4]Slime\\\\\\\\\\\\\\\\c[0] yang ada disekitar Hutan.\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]Slime\\\\\\\\\\\\\\\\c[0] sudah dikalahkan! Kerjakan objective selanjutnya\\\\\\\"\\\",\\\"\\\\\\\"Kerja Bagus!\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Dapatkan \\\\\\\\\\\\\\\\i[386]\\\\\\\\\\\\\\\\c[2]Slime Liquid\\\\\\\\\\\\\\\\c[0] lalu antarkan ke Theo\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\i[369]HP Potion x5\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\i[385]MP Potion x5\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\",\\\"2\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 2":"{\"Title\":\"\\\\i[87]Batman Fang\",\"Type\":\"Main Quests\",\"Difficulty\":\"Easy Peasy\",\"From\":\"Theo\",\"Location\":\"Hutan Hogwart\",\"Description\":\"[\\\"\\\\\\\"Theo menyuruhmu untuk mengalahkan \\\\\\\\\\\\\\\\c[4]Batman\\\\\\\\\\\\\\\\c[0] disini\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]Batman\\\\\\\\\\\\\\\\c[0] sudah dikalahkan! Kerjakan objective selanjutnya\\\\\\\"\\\",\\\"\\\\\\\"Kerja Bagus!\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Kalahkan \\\\\\\\\\\\\\\\c[4]Batman\\\\\\\\\\\\\\\\c[0] dan temui \\\\\\\\\\\\\\\\c[4]Batman Fang\\\\\\\\\\\\\\\\c[0] lalu antarkan ke Dallan untuk mendapatkan imbalan\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"HP Potion\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 3":"{\"Title\":\"\\\\i[87]Surat..\",\"Type\":\"Main Quests\",\"Difficulty\":\"Easy Peasy\",\"From\":\"Dallan\",\"Location\":\"Hutan Hogwart\",\"Description\":\"[\\\"\\\\\\\"Surat terselubung untuk temannya di Normal Town\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Berikan surat ini ke Dulcina \\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"Menginap gratis di Inn Normal Town\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 4":"{\"Title\":\"\\\\i[87]Jamur Misterius\",\"Type\":\"Side Quests\",\"Difficulty\":\"Easy Peasy\",\"From\":\"Ann\",\"Location\":\"Hutan Hogwart\",\"Description\":\"[\\\"\\\\\\\"Ann mencari Jamur Misterius yang akan digunakannya\\\\\\\\nsebagai bahan campuran obat eksperimennya.\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Dapatkan x5 \\\\\\\\\\\\\\\\i[261]\\\\\\\\\\\\\\\\c[2]Jamur Misterius\\\\\\\\\\\\\\\\c[0].\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\i[369]HP Potion x5\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\i[385]MP Potion x5\\\\\\\"\\\",\\\"\\\\\\\"Gold x200\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 5":"{\"Title\":\"\\\\i[87]Kapak tersembunyi\",\"Type\":\"Main Quests\",\"Difficulty\":\"Medium\",\"From\":\"Harold\",\"Location\":\"Hutan Hogwart 2\",\"Description\":\"[\\\"\\\\\\\"Bantu Harold menemukan kapak untuk memecahkan rasa penasarannya\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Temukan kapak di Hutan Hogwart 2 & kembali ke Hutan Hogwart 1\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[]\",\"Visible Rewards\":\"[]\",\"Subtext\":\"\"}","Quest 6":"{\"Title\":\"\\\\i[87]Kayu\",\"Type\":\"Side Quests\",\"Difficulty\":\"Easy Peasy\",\"From\":\"Azura\",\"Location\":\"Hutan Hogwart 3\",\"Description\":\"[\\\"\\\\\\\"Azura mencari kayu yang akan digunakannya sebagai bahan bakar di Normal Town\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Dapatkan x10 \\\\\\\\\\\\\\\\i[261]\\\\\\\\\\\\\\\\c[2]Kayu\\\\\\\\\\\\\\\\c[0].\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"Gold x150\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 7":"{\"Title\":\"\\\\i[87]Putri diculik\",\"Type\":\"Main Quests\",\"Difficulty\":\"Medium\",\"From\":\"Azura\",\"Location\":\"Hutan Hogwart 3\",\"Description\":\"[\\\"\\\\\\\"Menyelamatkan Tuan Putri yang telah diculik oleh Bos Dungeon disini.\\\\\\\"\\\",\\\"\\\\\\\"Tuan Putri sudah sangat lemas dan tidak berdaya\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]Melawan\\\\\\\\\\\\\\\\c[0] Bos Dungeon \\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]Menyelamatkan\\\\\\\\\\\\\\\\c[0] Tuan Putri \\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"Gold 200\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 8":"","Quest 9":"","Quest 10":"","Quest 11":"","Quest 12":"","Quest 13":"","Quest 14":"","Quest 15":"","Quest 16":"","Quest 17":"","Quest 18":"","Quest 19":"","Quest 20":"","Quest 21":"","Quest 22":"","Quest 23":"","Quest 24":"","Quest 25":"","Quest 26":"","Quest 27":"","Quest 28":"","Quest 29":"","Quest 30":"","Quest 31":"","Quest 32":"","Quest 33":"","Quest 34":"","Quest 35":"","Quest 36":"","Quest 37":"","Quest 38":"","Quest 39":"","Quest 40":"","Quest 41":"","Quest 42":"","Quest 43":"","Quest 44":"","Quest 45":"","Quest 46":"","Quest 47":"","Quest 48":"","Quest 49":"","Quest 50":"","Quest 51":"","Quest 52":"","Quest 53":"","Quest 54":"","Quest 55":"","Quest 56":"","Quest 57":"","Quest 58":"","Quest 59":"","Quest 60":"","Quest 61":"","Quest 62":"","Quest 63":"","Quest 64":"","Quest 65":"","Quest 66":"","Quest 67":"","Quest 68":"","Quest 69":"","Quest 70":"","Quest 71":"","Quest 72":"","Quest 73":"","Quest 74":"","Quest 75":"","Quest 76":"","Quest 77":"","Quest 78":"","Quest 79":"","Quest 80":"","Quest 81":"","Quest 82":"","Quest 83":"","Quest 84":"","Quest 85":"","Quest 86":"","Quest 87":"","Quest 88":"","Quest 89":"","Quest 90":"","Quest 91":"","Quest 92":"","Quest 93":"","Quest 94":"","Quest 95":"","Quest 96":"","Quest 97":"","Quest 98":"","Quest 99":"","Quest 100":""}},
{"name":"YEP_ItemCore","status":false,"description":"v1.30 Changes the way Items are handled for your game\nand the Item Scene, too.","parameters":{"---General---":"","Max Items":"100","Max Weapons":"1","Max Armors":"1","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---Item Scene---":"","Updated Scene Item":"true","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"20","Command Alignment":"center","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4","Use Command":"Use %1","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"false"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"Tiny_PopUpIcon","status":true,"description":"This lets you pop up icons like you can do with balloons and such.","parameters":{"General Settings":"","Auto PopUp":"On","Time":"60","IconSet Name":"IconSet","Sound Settings":"On","Sound":"Jump1","Volume":"100","Pitch":"100","Advanced Settings":"","Icon Collums":"16","Icon Width":"32","Icon Height":"32","Icon Offset Y":"-16","Text Offset Y":"-8","Text Size":"14\r"}},
{"name":"RS_EventName","status":true,"description":"(v1.3.9) This plugin displays an event's name above a head.","parameters":{"text Size":"16","Show Player Text":"true","Boat":"Boat","Ship":"Ship","AirShip":"AirShip"}},
{"name":"MrTS_IconMenu","status":true,"description":"Changes menu to window with icons and description only.","parameters":{"Icon Window X":"Graphics.boxWidth/2 - this._commandWindow.width/2","Icon Window Y":"200","Help Window X":"Graphics.boxWidth/2 - this._helpWindow.width/2","Help Window Y":"88","Gold Window X":"0","Help Window Width":"this._commandWindow.width + 150","Gold Window Y":"Graphics.boxHeight - this.height","Icon Window Transparent":"false","Help Window Transparent":"false","Gold Window Transparent":"false"}}
];
