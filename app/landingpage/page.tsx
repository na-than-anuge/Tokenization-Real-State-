"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import  AlertDialogs  from "@/app/tools/alert";



export default function LandingPage() {
  return (
    <div className="body">
      <section className="HOMEPAGE ">
        <div className="container"> 
          <Card>
            <CardHeader>
              <CardTitle className="card-title">Finternet</CardTitle>
              <CardDescription className="card-description">Real Estate Tokenization Platform</CardDescription>
            </CardHeader>
            <CardContent className="card-content">
              <p>Tranfrom real state tradeable digital assets, what are you waiting for? Register now and connect your wallet to get started</p>
            </CardContent>
          </Card>
          <div className="button-container">
          
            <AlertDialogs/>

            <Button className="Btn">
              Explore Properties
            </Button>
          </div>     
        </div>
      </section>
                                                        {/* HOW IT WORK SECTION */}
      <section className="Howitworks">
        <div className="con-howitworks">
          <div className="Title">
            <h1>How It Works</h1>
          </div>
        </div>

        <div className="Steps">

          {/* <div className="altcoins">
            <img src="Images/homealtcoin.png" alt="" />
          </div> */}
          <div className="Guides">
            <h3>Tokenize</h3>
            <p>Transform Properties Into Digital Assets</p>
          </div>
          <div className="Guides">
            <h3>Trade</h3>
            <p>Buy and Sell Real Estate Token</p>
          </div>
          <div className="Guides">
            <h3>Earn</h3>
            <p>Recieve Passive Rental Income</p>
          </div>
        </div>

       
      </section>

                                                        {/* EXPLORE PROPERTIES */}
    <section>
        <div className="EXPLORE-PROPERTIES">
            <div className="search">

            </div>

            <div className="Properties">
                
                <div className="sample-properties">
                    
                </div>
            </div>

        </div>
    </section>
    </div>
  );
}