
import React from "react";
import UserLayout from "@/components/layout/UserLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Calendar, Clock, Share, Bookmark, ThumbsUp, ThumbsDown } from "lucide-react";
import { Link } from "react-router-dom";
import { sportsNews } from "@/components/home/data";

const SinglePostPage = () => {
  // In a real app, this would be fetched based on URL param
  const post = sportsNews[0];
  
  // Related articles - would be fetched based on tags/categories in real app
  const relatedArticles = sportsNews.slice(1, 5);

  return (
    <UserLayout>
      <div className="min-h-screen bg-mechitv-bg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              {/* Breadcrumb */}
              <div className="text-sm text-muted-foreground mb-4">
                <Link to="/" className="hover:text-mechitv-accent">Home</Link>
                {" / "}
                <Link to="/news" className="hover:text-mechitv-accent">News</Link>
                {" / "}
                <span className="text-white">{post.title}</span>
              </div>
              
              {/* Article header */}
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>5 min read</span>
                  </div>
                  <span className="bg-mechitv-accent text-black text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                
                {/* Author info */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-mechitv-bg-light">
                    <img 
                      src="https://i.pravatar.cc/40?img=11" 
                      alt="Author" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium">James Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Sports Analyst</p>
                  </div>
                </div>
              </div>
              
              {/* Featured image */}
              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Article content */}
              <div className="prose prose-invert max-w-none">
                <p className="text-lg mb-4">
                  In the Premier League, Wolves has won four of their previous five away games, but they have dropped
                  five of their last six games and drawn one at Selhurst Park.
                </p>
                
                <p className="mb-4">
                  This combo isn't just stats on paper – it's about matchup dynamics and fresh legs meeting worn ones.
                  Minnesota's set up to control the rhythm early, and Reid's shooting could be the spark that lights the
                  fuse.
                </p>
                
                <p className="mb-4">
                  Regardless of who gets the credit, the fact is that Golden State was ranked No. 1 on defense in the
                  NBA in the second half of the season. Thanks to James Butler and Draymond Green, the Warriors
                  improved their defense significantly after the break, making them better even than the Thunder.
                </p>
                
                <p className="mb-4">
                  Last round, in their final three games, the Timberwolves found a way to get past the defense. From late
                  in Game 3 all through the start of Game 4 till the blowout took over in the final period, Minnesota put
                  up 137 points. By Game 5, it had scored 121, allowing its players to take it easy in the fourth quarter
                  thanks to a large 21-point lead late in the game.
                </p>
                
                <h2 className="text-2xl font-bold mt-6 mb-4">Key Takeaways</h2>
                
                <ul className="list-disc pl-6 mb-4">
                  <li>Minnesota's well-rested squad is positioned to exploit Oklahoma's fatigue after their grueling Game 7</li>
                  <li>Naz Reid has been hitting nearly 47% of his postseason threes on 4-5 attempts per game</li>
                  <li>Golden State was ranked No. 1 on defense in the NBA in the second half of the season</li>
                </ul>
              </div>
              
              {/* Action bar */}
              <div className="flex justify-between items-center py-4 border-y border-border my-8">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    <span>245</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <ThumbsDown className="h-4 w-4" />
                    <span>13</span>
                  </Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Share className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4" />
                    <span>Save</span>
                  </Button>
                </div>
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
                
                {/* Comment */}
                <div className="bg-mechitv-bg-light rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src="https://i.pravatar.cc/32?img=5"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">SoangTV</p>
                      <p className="text-xs text-muted-foreground">17 hours ago</p>
                    </div>
                  </div>
                  <p className="text-sm mb-2">
                    Crystal Palace vs Wolverhampton Live
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <Button variant="ghost" size="sm" className="h-7 px-2">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      <span>32</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 px-2">
                      <ThumbsDown className="h-3 w-3 mr-1" />
                      <span>0</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 px-2">
                      Reply
                    </Button>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-2">Show more comments</Button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              {/* Related Articles */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                
                <div className="space-y-4">
                  {relatedArticles.map((article) => (
                    <Card key={article.id} className="bg-mechitv-bg-light border-border overflow-hidden">
                      <div className="flex gap-3 p-3">
                        <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium line-clamp-2 mb-1">{article.title}</h4>
                          <div className="flex justify-between items-center text-xs text-muted-foreground">
                            <span>{article.date}</span>
                            <div className="flex items-center">
                              <MessageSquare className="h-3 w-3 mr-1" />
                              <span>24</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Additional Sidebar Section - Popular Matches */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Popular Matches</h3>
                
                <Card className="bg-mechitv-bg-light border-border mb-4 overflow-hidden">
                  <Link to="#" className="block">
                    <div className="flex items-center gap-2 p-3">
                      <div className="flex items-center flex-1 gap-2">
                        <img src="https://placehold.co/30x30" alt="Team 1" className="w-7 h-7 object-contain" />
                        <span className="text-sm">Barcelona</span>
                      </div>
                      <div className="font-semibold text-sm">vs</div>
                      <div className="flex items-center flex-1 justify-end gap-2">
                        <span className="text-sm">Real Madrid</span>
                        <img src="https://placehold.co/30x30" alt="Team 2" className="w-7 h-7 object-contain" />
                      </div>
                    </div>
                    <div className="bg-mechitv-bg px-3 py-1.5 text-xs text-muted-foreground">
                      <div className="flex justify-between">
                        <span>SCORE808 LIVE</span>
                        <span>98,962 VIEWS</span>
                      </div>
                    </div>
                  </Link>
                </Card>
                
                <Card className="bg-mechitv-bg-light border-border mb-4 overflow-hidden">
                  <Link to="#" className="block">
                    <div className="flex items-center gap-2 p-3">
                      <div className="flex items-center flex-1 gap-2">
                        <img src="https://placehold.co/30x30" alt="Team 1" className="w-7 h-7 object-contain" />
                        <span className="text-sm">Inter Milan</span>
                      </div>
                      <div className="font-semibold text-sm">vs</div>
                      <div className="flex items-center flex-1 justify-end gap-2">
                        <span className="text-sm">Barcelona</span>
                        <img src="https://placehold.co/30x30" alt="Team 2" className="w-7 h-7 object-contain" />
                      </div>
                    </div>
                    <div className="bg-mechitv-bg px-3 py-1.5 text-xs text-muted-foreground">
                      <div className="flex justify-between">
                        <span>SCORE808 LIVE</span>
                        <span>78,702 VIEWS</span>
                      </div>
                    </div>
                  </Link>
                </Card>
                
                <Card className="bg-mechitv-bg-light border-border overflow-hidden">
                  <Link to="#" className="block">
                    <div className="flex items-center gap-2 p-3">
                      <div className="flex items-center flex-1 gap-2">
                        <img src="https://placehold.co/30x30" alt="Team 1" className="w-7 h-7 object-contain" />
                        <span className="text-sm">Real Madrid</span>
                      </div>
                      <div className="font-semibold text-sm">vs</div>
                      <div className="flex items-center flex-1 justify-end gap-2">
                        <span className="text-sm">Arsenal</span>
                        <img src="https://placehold.co/30x30" alt="Team 2" className="w-7 h-7 object-contain" />
                      </div>
                    </div>
                    <div className="bg-mechitv-bg px-3 py-1.5 text-xs text-muted-foreground">
                      <div className="flex justify-between">
                        <span>SCORE808 LIVE</span>
                        <span>65,243 VIEWS</span>
                      </div>
                    </div>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default SinglePostPage;
