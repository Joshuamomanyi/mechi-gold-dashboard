
import React, { useState } from "react";
import UserLayout from "@/components/layout/UserLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Calendar, Clock, Share, Bookmark, ThumbsUp, ThumbsDown, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { highlights } from "@/components/home/data";

const SingleHighlightPage = () => {
  // In a real app, this would be fetched based on URL param
  const highlight = highlights[0];
  
  // Related highlights - would be fetched based on tags/categories in real app
  const relatedHighlights = highlights.slice(1, 6);
  
  // Track likes/dislikes
  const [likes, setLikes] = useState(132);
  const [dislikes, setDislikes] = useState(8);
  const [userAction, setUserAction] = useState<"like" | "dislike" | null>(null);
  
  const handleLike = () => {
    if (userAction === "like") {
      setLikes(likes - 1);
      setUserAction(null);
    } else {
      setLikes(likes + 1);
      if (userAction === "dislike") {
        setDislikes(dislikes - 1);
      }
      setUserAction("like");
    }
  };
  
  const handleDislike = () => {
    if (userAction === "dislike") {
      setDislikes(dislikes - 1);
      setUserAction(null);
    } else {
      setDislikes(dislikes + 1);
      if (userAction === "like") {
        setLikes(likes - 1);
      }
      setUserAction("dislike");
    }
  };

  return (
    <UserLayout>
      <div className="min-h-screen bg-mechitv-bg">
        <div className="container mx-auto px-4 py-8">
          {/* Video Title and Info */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white">Manchester City 3-0 Bournemouth - Nico 89'</h1>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              <span>20 Feb 2025</span>
              <span className="mx-2">•</span>
              <span>56 views</span>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              {/* Video Player */}
              <div className="aspect-video bg-mechitv-bg-light relative rounded-lg mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?auto=format&fit=crop&q=80&w=1000"
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button 
                    size="icon" 
                    className="h-16 w-16 rounded-full bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90"
                  >
                    <Play className="h-8 w-8" fill="currentColor" />
                    <span className="sr-only">Play Video</span>
                  </Button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded">
                  02:30
                </div>
              </div>
              
              {/* Action Bar */}
              <div className="flex justify-between items-center mb-6 bg-mechitv-bg-light rounded-md p-3">
                <div className="flex items-center gap-3">
                  {/* Channel info */}
                  <Link to="#" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src="https://i.pravatar.cc/32?img=12"
                        alt="Score808"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">score808</p>
                      <p className="text-xs text-muted-foreground">430 followers</p>
                    </div>
                  </Link>
                </div>
                <Button className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90 text-sm">
                  Follow
                </Button>
              </div>
              
              {/* Video Actions */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <Button 
                    variant={userAction === "like" ? "default" : "outline"} 
                    size="sm" 
                    onClick={handleLike}
                    className={userAction === "like" ? "bg-mechitv-accent text-mechitv-bg" : ""}
                  >
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>{likes}</span>
                  </Button>
                  <Button 
                    variant={userAction === "dislike" ? "default" : "outline"} 
                    size="sm"
                    onClick={handleDislike}
                    className={userAction === "dislike" ? "bg-mechitv-accent text-mechitv-bg" : ""}
                  >
                    <ThumbsDown className="h-4 w-4 mr-1" />
                    <span>{dislikes}</span>
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Share className="h-4 w-4 mr-1" />
                    <span>Share</span>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="h-4 w-4 mr-1" />
                    <span>Save</span>
                  </Button>
                </div>
              </div>
              
              {/* Video Description */}
              <div className="bg-mechitv-bg-light rounded-lg p-4 mb-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-lg font-medium text-white mb-2">Match Details</h2>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">20 Feb 2025</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Premier League</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-2xl text-white">3-0</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Nico scores a beautiful goal in the 89th minute to secure Manchester City's 3-0 win over Bournemouth 
                  at the Etihad Stadium. This goal showcases City's dominance in the match as they maintain their position 
                  at the top of the Premier League table.
                </p>
              </div>
              
              {/* Comments section */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Comments</h3>
                
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="https://i.pravatar.cc/40?img=3"
                      alt="User avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <textarea
                      placeholder="Write your comment..."
                      className="w-full p-3 bg-mechitv-bg-light border border-border rounded-lg focus:border-mechitv-accent focus:ring-1 focus:ring-mechitv-accent"
                      rows={3}
                    />
                    <div className="flex justify-end mt-2">
                      <Button size="sm" className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90">
                        Comment
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Comments */}
                <div className="space-y-4">
                  <div className="bg-mechitv-bg-light rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="https://i.pravatar.cc/32?img=5"
                          alt="User avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Football_Fan23</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <p className="text-sm mb-2">
                      What a strike! Nico has been such a great signing for City this season.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <Button variant="ghost" size="sm" className="h-7 px-2">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        <span>42</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-7 px-2">
                        <ThumbsDown className="h-3 w-3 mr-1" />
                        <span>2</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-7 px-2">
                        Reply
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-mechitv-bg-light rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="https://i.pravatar.cc/32?img=8"
                          alt="User avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">CherrySupporter</p>
                        <p className="text-xs text-muted-foreground">5 hours ago</p>
                      </div>
                    </div>
                    <p className="text-sm mb-2">
                      Tough day for us Bournemouth fans. City were just too strong.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <Button variant="ghost" size="sm" className="h-7 px-2">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        <span>18</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-7 px-2">
                        <ThumbsDown className="h-3 w-3 mr-1" />
                        <span>1</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-7 px-2">
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">Show more comments</Button>
              </div>
            </div>
            
            {/* Sidebar - Related Videos */}
            <div className="w-full lg:w-1/3">
              <h3 className="text-xl font-semibold mb-4">Related Highlights</h3>
              
              <div className="space-y-4">
                {relatedHighlights.map((video, index) => (
                  <Card key={index} className="bg-mechitv-bg-light border-border overflow-hidden">
                    <Link to="#" className="flex gap-3 p-0">
                      <div className="w-32 h-20 relative flex-shrink-0">
                        <img
                          src={video.image}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="flex-1 p-2">
                        <h4 className="text-sm font-medium line-clamp-2 mb-1">{video.title}</h4>
                        <div className="flex flex-col text-xs text-muted-foreground">
                          <span>score808</span>
                          <div className="flex items-center justify-between">
                            <span>34 views</span>
                            <span>10 Feb 2025</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
                
                {/* Featured Match Card */}
                <Card className="bg-mechitv-bg-light border-border overflow-hidden mt-6">
                  <div className="p-3 border-b border-border">
                    <h4 className="font-semibold text-white">Live Matches</h4>
                  </div>
                  
                  <div className="p-3">
                    <Link to="#" className="block mb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center flex-1 gap-2">
                          <img src="https://placehold.co/30x30" alt="Team 1" className="w-6 h-6 object-contain" />
                          <span className="text-sm">Man City</span>
                        </div>
                        <div className="flex gap-1 text-sm font-semibold">
                          <span className="text-white">2</span>
                          <span className="px-1">-</span>
                          <span className="text-white">0</span>
                        </div>
                        <div className="flex items-center flex-1 justify-end gap-2">
                          <span className="text-sm">Bournemouth</span>
                          <img src="https://placehold.co/30x30" alt="Team 2" className="w-6 h-6 object-contain" />
                        </div>
                      </div>
                      <div className="text-right text-xs text-mechitv-accent mt-1">88:20'</div>
                    </Link>
                    
                    <Link to="#" className="block mb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center flex-1 gap-2">
                          <img src="https://placehold.co/30x30" alt="Team 1" className="w-6 h-6 object-contain" />
                          <span className="text-sm">Chelsea</span>
                        </div>
                        <div className="flex gap-1 text-sm font-semibold">
                          <span className="text-white">1</span>
                          <span className="px-1">-</span>
                          <span className="text-white">1</span>
                        </div>
                        <div className="flex items-center flex-1 justify-end gap-2">
                          <span className="text-sm">Arsenal</span>
                          <img src="https://placehold.co/30x30" alt="Team 2" className="w-6 h-6 object-contain" />
                        </div>
                      </div>
                      <div className="text-right text-xs text-mechitv-accent mt-1">67:05'</div>
                    </Link>
                    
                    <Link to="#" className="block">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center flex-1 gap-2">
                          <img src="https://placehold.co/30x30" alt="Team 1" className="w-6 h-6 object-contain" />
                          <span className="text-sm">Man United</span>
                        </div>
                        <div className="flex gap-1 text-sm font-semibold">
                          <span className="text-white">0</span>
                          <span className="px-1">-</span>
                          <span className="text-white">2</span>
                        </div>
                        <div className="flex items-center flex-1 justify-end gap-2">
                          <span className="text-sm">West Ham</span>
                          <img src="https://placehold.co/30x30" alt="Team 2" className="w-6 h-6 object-contain" />
                        </div>
                      </div>
                      <div className="text-right text-xs text-mechitv-accent mt-1">54:22'</div>
                    </Link>
                  </div>
                  
                  <div className="p-2 bg-mechitv-bg">
                    <Button variant="link" size="sm" className="w-full text-mechitv-accent">
                      View All Live Matches
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default SingleHighlightPage;
