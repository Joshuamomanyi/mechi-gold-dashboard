
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import UserLayout from "@/components/layout/UserLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; 
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  Share, 
  MessageSquare, 
  Bookmark,
  TagIcon,
  ChevronRight,
  Search
} from "lucide-react";
import { sportsNews } from "@/components/home/data";

const BlogPostPage = () => {
  const { id } = useParams();
  const postId = parseInt(id || "1");
  
  // Find the current post
  const post = sportsNews.find(item => item.id === postId) || sportsNews[0];
  
  // Get related posts based on category
  const relatedPosts = sportsNews
    .filter(item => item.category === post.category && item.id !== post.id)
    .slice(0, 3);
  
  // Get popular posts
  const popularPosts = sportsNews
    .sort(() => Math.random() - 0.5) // Just for demo, in real app would use view counts
    .slice(0, 4);
  
  // Get recent posts
  const recentPosts = [...sportsNews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <UserLayout>
      <div className="min-h-screen bg-mechitv-bg">
        {/* Blog Post Hero */}
        <div className="bg-mechitv-bg-light py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-8 max-w-4xl mx-auto">
              <span className="bg-mechitv-accent text-black text-xs font-medium px-2 py-1 rounded mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
              
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-2">
                    <AvatarImage src="https://i.pravatar.cc/40?img=11" alt="Author" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-sm font-medium text-white">James Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Sports Analyst</p>
                  </div>
                </div>
                
                <Separator orientation="vertical" className="h-6" />
                
                <div className="flex items-center space-x-2 text-muted-foreground text-xs">
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" /> {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> 5 min read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-mechitv-bg-light rounded-lg border border-border p-6 mb-8">
                {/* Featured Image */}
                <div className="mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                
                {/* Post Content */}
                <div className="prose prose-invert prose-img:rounded-lg max-w-none">
                  <p className="text-lg mb-4">
                    {post.excerpt}
                  </p>
                  <p className="mb-4">
                    In the ever-evolving landscape of sports, few narratives capture the imagination quite like the journey of an underdog. Today, we delve into the remarkable story of how tactical innovation and unwavering team spirit can overcome seemingly insurmountable challenges.
                  </p>
                  <p className="mb-4">
                    The match began with cautious exchanges, both teams clearly aware of the stakes. As the first half progressed, the favorites established dominance in possession but struggled to translate it into clear-cut chances. The underdogs, meanwhile, remained disciplined, their defensive shape frustrating the opposition's creative players.
                  </p>
                  <h2 className="text-xl font-bold mt-6 mb-4">Strategic Turning Points</h2>
                  <p className="mb-4">
                    The turning point came ten minutes into the second half. A swift counter-attack, executed with precision, caught the favorites off guard. The finish was clinical, sending the underdogs' supporters into raptures. What followed was a masterclass in game management – a perfect balance between maintaining defensive solidity and posing a threat on the break.
                  </p>
                  <p className="mb-4">
                    As the final whistle blew, the celebrations began in earnest. It wasn't just a victory; it was a testament to the power of tactical intelligence, collective effort, and belief. In a sport where financial disparities often dictate outcomes, this result served as a reminder that on any given day, the spirit of competition can level the playing field.
                  </p>
                  <blockquote className="border-l-4 border-mechitv-accent pl-4 italic my-6">
                    "This victory wasn't just about talent; it was about heart, determination, and executing our game plan to perfection. Every player gave everything for the badge today."
                  </blockquote>
                  <p>
                    Looking ahead, this result will undoubtedly be remembered as one of the great upsets. For the underdogs, it's a platform to build on; for the favorites, a sobering reminder that reputation counts for little without performance. As sports fans, we are once again reminded of why we love the beautiful game – its unpredictability, its drama, and its capacity to inspire.
                  </p>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8">
                  <span className="flex items-center text-muted-foreground text-sm mb-2">
                    <TagIcon className="h-4 w-4 mr-2" /> Tags:
                  </span>
                  <Button variant="outline" size="sm" className="rounded-full text-xs">
                    Sports Analysis
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full text-xs">
                    Tactical Breakdown
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full text-xs">
                    Match Report
                  </Button>
                </div>
                
                {/* Share and Bookmark */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Share className="h-4 w-4 mr-2" /> Share
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Bookmark className="h-4 w-4 mr-2" /> Bookmark
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MessageSquare className="h-4 w-4" />
                    <span>24 Comments</span>
                  </div>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="bg-mechitv-bg-light rounded-lg border border-border p-6 mb-8">
                <div className="flex items-start sm:items-center flex-col sm:flex-row">
                  <Avatar className="h-16 w-16 mr-4 mb-4 sm:mb-0">
                    <AvatarImage src="https://i.pravatar.cc/64?img=11" alt="Author" />
                    <AvatarFallback>JR</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">About James Rodriguez</h3>
                    <p className="text-muted-foreground mt-2">
                      James is a former professional athlete who has transitioned into sports journalism. 
                      With over a decade of experience on the field, he brings unique insights into the 
                      tactical and psychological aspects of sports.
                    </p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm">
                        View All Posts
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Related Posts */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Related Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedPosts.map((related) => (
                    <Card key={related.id} className="bg-mechitv-bg-light border-border">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={related.image} 
                          alt={related.title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <CardContent className="p-4">
                        <span className="text-xs text-mechitv-accent">{related.category}</span>
                        <h3 className="font-semibold text-white text-sm mt-1">{related.title}</h3>
                        <p className="text-muted-foreground text-xs mt-2 line-clamp-2">
                          {related.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Comments Section */}
              <div className="bg-mechitv-bg-light rounded-lg border border-border p-6">
                <h2 className="text-xl font-bold mb-6">Comments (24)</h2>
                
                {/* Comment Form */}
                <div className="mb-8">
                  <div className="flex items-start mb-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src="https://i.pravatar.cc/40?img=8" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Input 
                        placeholder="Write a comment..." 
                        className="bg-mechitv-bg border-border focus-visible:ring-mechitv-accent"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90">
                      Post Comment
                    </Button>
                  </div>
                </div>
                
                {/* Comments List */}
                <div className="space-y-6">
                  {/* Comment 1 */}
                  <div className="border-b border-border pb-6">
                    <div className="flex items-start">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src="https://i.pravatar.cc/40?img=12" alt="Commenter" />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">Sarah Connor</h4>
                          <span className="text-xs text-muted-foreground">2 hours ago</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">
                          Great analysis! I was watching the match and completely agree with your 
                          assessment of the tactical shift in the second half. Do you think they can 
                          maintain this form against stronger opposition?
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Button variant="ghost" size="sm" className="h-auto p-0 hover:bg-transparent hover:text-mechitv-accent">
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Comment 2 */}
                  <div>
                    <div className="flex items-start">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src="https://i.pravatar.cc/40?img=33" alt="Commenter" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">John Doe</h4>
                          <span className="text-xs text-muted-foreground">5 hours ago</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">
                          I think you're overlooking the role of individual brilliance in this result. 
                          Yes, the tactics were spot on, but that finish for the goal was world-class 
                          and would have beaten any goalkeeper.
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Button variant="ghost" size="sm" className="h-auto p-0 hover:bg-transparent hover:text-mechitv-accent">
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <div className="bg-mechitv-bg-light rounded-lg border border-border p-6">
                <h3 className="text-lg font-bold mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search articles..." 
                    className="pl-9 bg-mechitv-bg border-border focus-visible:ring-mechitv-accent"
                  />
                </div>
              </div>
              
              {/* Popular Posts */}
              <div className="bg-mechitv-bg-light rounded-lg border border-border p-6">
                <h3 className="text-lg font-bold mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <div key={post.id} className="flex items-start space-x-3">
                      <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2">{post.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-mechitv-bg-light rounded-lg border border-border p-6">
                <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="border-b border-border pb-3 last:border-0 last:pb-0">
                      <h4 className="font-medium text-sm hover:text-mechitv-accent transition-colors cursor-pointer">
                        {post.title}
                      </h4>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" /> {post.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-mechitv-bg-light rounded-lg border border-border p-6">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {["Football", "Basketball", "Tennis", "Rugby", "Formula 1"].map((category) => (
                    <div key={category} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="text-muted-foreground hover:text-mechitv-accent transition-colors cursor-pointer">
                        {category}
                      </span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tags Cloud */}
              <div className="bg-mechitv-bg-light rounded-lg border border-border p-6">
                <h3 className="text-lg font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["Football", "Premier League", "LaLiga", "Champions League", "World Cup", "Transfer News", "Team Analysis", "Player Spotlight", "Match Preview"].map((tag) => (
                    <Button key={tag} variant="outline" size="sm" className="rounded-full text-xs">
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default BlogPostPage;
