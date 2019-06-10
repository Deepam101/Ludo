var roll=document.getElementById("roll");
var locker1=document.getElementById("lock");
var locker2=document.getElementById("lock2");
var dice=document.getElementById("dice");
var player=document.getElementById("player");
var lockno1=document.getElementById("lockerno1");
var lockno2=document.getElementById("lockerno2");
var cellr=document.getElementById("1");
var cellb=document.getElementById("15");
var red1=document.getElementById("red1"),red2=document.getElementById("red2"),blue1=document.getElementById("blue1"),blue2=document.getElementById("blue2");
var submit=document.getElementById("submit");
var number=document.getElementById("formss");
var cellr2=document.getElementById("1"),cellb2=document.getElementById("15");
roll.style.cursor='pointer';
locker1.style.cursor='pointer';
locker2.style.cursor='pointer';
var click1=0,click2=0;
var lock1piece=2,lock2piece=2,count1=0,count2=0;
var redout1=0,redout2=0,blueout1=0,blueout2=0;
var redprog1=1,redprog2=1,blueprog1=15,blueprog2=15;var wincountr=0,wincountb=0,dec=0;var value;

//======================begin==============================
roll.onclick=function()
{
	dec=1;
	if(dec==1)
	{
	var rand=6*Math.random();
	value=Math.ceil(rand);
	}
	if(dec==2)
	{
		 value=Number(document.getElementById("formss").value);
		
	}
	job();
	if(wincountr>=2)
		{
			alert("Player 1 Wins");
			console.log("win");
		}
		if(wincountb>=2)
		{
			alert("Player 2 Wins");
			console.log("win"); 
		}

};
submit.onclick=function()
{
	dec=2;
	if(dec==1)
	{var rand=6*Math.random();
	 value=Math.ceil(rand);}
	if(dec==2)
	{
		 value=Number(document.getElementById("formss").value);
		  console.log(value);
	}
	job();
	if(wincountr>=2)
		{
			alert("Player 1 Wins");
			console.log("win");
		}
		if(wincountb>=2)
		{
			alert("Player 2 Wins");
			console.log("win"); 
		}
		console.log("redprog1="+redprog1+" redprog2="+redprog2);
};
	

	
	
function job()
{	
	click1=0,click2=0;

	var moved=0;
	if(player.textContent=="1" &&  dice.textContent!=6)
		player.textContent="2";
	else if(player.textContent=="2" &&  dice.textContent!=6)
		player.textContent="1";

	
	dice.textContent=value;
//=================on getting 6 red=========================
	if(dice.textContent==6 && player.textContent=="1" && moved!=1)
		locker1.onclick=function(){
			if(lock1piece!=0 && click1!=1 && moved!=1 && player.textContent=="1" && dice.textContent==6)
			{	
				
				if(redout1==1)
					redout2=1;
				else
					redout1=1;
				if(redout1==1 && redprog1!=100)
				{
					cellr.classList.add("pieces1","red");
					red1.classList.remove("pieces1");
				}
				 if(redout2==1 && redprog2!=100)
				 {
					cellr2.classList.add("pieces2","red");
					red2.classList.remove("pieces2","red");
				 }
				lockno1.textContent=--lock1piece;
				click1=1;
			}
		};
//========================on getting 6 blue============================
	if(dice.textContent==6 && player.textContent=="2" && moved!=1)
		locker2.onclick=function(){
			if(lock2piece!=0 && click2!=1 && moved!=1 && player.textContent=="2" && dice.textContent==6 )
			{
				if(blueout1==1 )
					blueout2=1;
				else
					blueout1=1;
				if(blueout1==1 && blueprog1!=100)
					{
						cellb.classList.add("pieces1","blue");
						blue1.classList.remove("pieces1");
					}
					if(blueout2==1 && blueprog2!=100)
					 {
						cellb2.classList.add("pieces2","blue");
						blue2.classList.remove("pieces2","blue");
					}
				lockno2.textContent=--lock2piece;
				click2=1;
			}
			
		};
//=====================moving red pieces==============================
	if(player.textContent=="1" && click1!=1 && moved!=1 && redout1==1)
		cellr.onclick=function()
			{
				if(moved!=1 && click1!=1 )
				{
						
						redprog1+=value;
						if(redprog1<=27)
							{
								console.log(redprog1+"moving red");
								var cell2=document.getElementById(redprog1);
								cellr.classList.remove("pieces1","red");
								cell2.classList.add("pieces1","red");
								cellr=document.getElementById(redprog1);
								moved=1;
								if(cellr==cellb || cellr==cellb2)
									{
									
										lockno2.textContent=++lock2piece;
										if(cellr==cellb)
											{
												blue1.classList.add("pieces1","blue");
												cellb.classList.remove("pieces1","blue");
												cellb=document.getElementById("15");
												count1=0;
											}
										else{
											 blue2.classList.add("pieces2","blue")
											cellb2.classList.remove("pieces2","blue");
												cellb2=document.getElementById("15");
												count2=0;
											}
									}
							}		
							else if(redprog1>28)
								redprog1-=value;
							else if(redprog1==28)
								{cellr.classList.remove("pieces1","red");wincountr++;redprog1=100;moved=1;cellr=0;}

				}
			

		};

		if(player.textContent=="1" && click1!=1 && moved!=1 && redout2==1 )
		cellr2.onclick=function(){
			if(moved!=1 && click1!=1 && redprog2<=27 )
			{
				redprog2+=value;
				if(redprog2<=27)
					{
						var cell2=document.getElementById(redprog2);
						cellr2.classList.remove("pieces2","red");
						cell2.classList.add("pieces2","red");
						cellr2=document.getElementById(redprog2);
						moved=1;
						if(cellr2==cellb || cellr2==cellb2)
							{
							
								lockno2.textContent=++lock2piece;
								if(cellr2==cellb)
									{
										blue1.classList.add("pieces1");
										cellb.classList.remove("pieces1","blue");
										cellb=document.getElementById("15");
										count1=0;
									}
								else{
										blue2.classList.add("pieces2");
										cellb2.classList.remove("pieces2","blue");
										cellb2=document.getElementById("15");
										count2=0;
									}

				    		}
				    }		
				else if(redprog2>28)
						redprog2-=value;
				else if(redprog2==28)
						{cellr2.classList.remove("pieces2","red");wincountr++;redprog2==100;moved=1;cellr2=0;}
			}
			
		};
//================moving blue pieces=========================
		if(player.textContent=="2" && click2!=1 && moved!=1 && blueout1==1)
			cellb.onclick=function()
			{
				if(moved!=1 && click2!=1)
					{
						blueprog1+=value;

						if(blueprog1>=29)
							{
								blueprog1-=28;
								count1=1;
							}

					    if(blueprog1<=13 || count1!=1)		
						{
							var cell2=document.getElementById(blueprog1);
						
							cellb.classList.remove("pieces1","blue");
							cell2.classList.add("pieces1","blue");
							cellb=document.getElementById(blueprog1);
							moved=1;
							if(cellb==cellr || cellb==cellr2)
								{
									
									lockno1.textContent=++lock1piece;
									if(cellr==cellb)
										{
											red1.classList.add("pieces1");
											cellr.classList.remove("pieces2","red");
											cellr=document.getElementById("1");
										}
									else
										{
											red2.classList.add("pieces2");
											cellr2.classList.remove("pieces2","red");
											cellr2=document.getElementById("1");
										}
								}
						}
						else if(blueprog1 ==14)
							{wincountb++;cellb.classList.remove("pieces1","blue");blueprog1=100;cellb=0;}
						else if(blueprog1>14)
							blueprog1-=value;

					}	
				

			};

		if(player.textContent=="2" && click2!=1 && moved!=1 && blueout2==1)
		cellb2.onclick=function()
	{
			if(moved!=1 && click2!=1)
			{
				blueprog2+=value;
				if(blueprog2>=29)
					{
						blueprog2-=28;
						count2=1;
					}
					if(blueprog2<=13 || count2!=1)		
					{
						var cell2=document.getElementById(blueprog2);
						
						cellb2.classList.remove("pieces2","blue");
						cell2.classList.add("pieces2","blue");
						cellb2=document.getElementById(blueprog2);
						moved=1;
						if(cellb2==cellr || cellb2==cellr2)
								{
									
									lockno1.textContent=++lock1piece;
									if(cellr==cellb2)
										{
											red1.classList.add("pieces1");
											cellr.classList.remove("pieces1","red");
											cellr=document.getElementById("1");
										}
									else
										{
											red2.classList.add("pieces2");
											cellr2.classList.remove("pieces2","red");
											cellr2=document.getElementById("1");
										}
								}
					}
						else if(blueprog2 ==14)
							{wincountb++;cellb2.classList.remove("pieces2","blue");blueprog2=100;cellb2=0;}
						else if(blueprog2>14)
							blueprog2-=value;
				}			
			

	};
		
		
			
		
}
