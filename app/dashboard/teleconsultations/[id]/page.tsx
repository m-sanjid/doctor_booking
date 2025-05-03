"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mic, MicOff, Camera, CameraOff, Phone, FileText, Send, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function TeleconsultationPage({ params }: { params: { id: string } }) {
  const [isMicOn, setIsMicOn] = useState(true)
  const [isCameraOn, setIsCameraOn] = useState(true)
  const [isConnected, setIsConnected] = useState(false)
  const [message, setMessage] = useState("")

  // In a real app, you would:
  // 1. Fetch the appointment details
  // 2. Connect to the video service (Twilio, Agora, etc.)
  // 3. Handle real-time communication

  useEffect(() => {
    // Simulate connection delay
    const timer = setTimeout(() => {
      setIsConnected(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const toggleMic = () => setIsMicOn(!isMicOn)
  const toggleCamera = () => setIsCameraOn(!isCameraOn)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // In a real app, you would send the message to the backend
    console.log("Sending message:", message)
    setMessage("")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Video Consultation</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-black">
                {!isConnected && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    <p className="text-white ml-4">Connecting to your appointment...</p>
                  </div>
                )}

                {isConnected && (
                  <>
                    {/* Doctor's video */}
                    <div className="absolute inset-0">
                      <Image
                        src="/placeholder.svg?height=720&width=1280"
                        alt="Doctor's video"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>

                    {/* Patient's video (small overlay) */}
                    <div className="absolute bottom-4 right-4 w-1/4 aspect-video bg-gray-800 border-2 border-white rounded-lg overflow-hidden">
                      {isCameraOn ? (
                        <Image
                          src="/placeholder.svg?height=180&width=320"
                          alt="Your video"
                          width={320}
                          height={180}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-800">
                          <CameraOff className="h-8 w-8 text-white" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              <div className="p-4 flex items-center justify-center gap-4">
                <Button
                  variant={isMicOn ? "outline" : "destructive"}
                  size="icon"
                  onClick={toggleMic}
                  className="rounded-full h-12 w-12"
                >
                  {isMicOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                </Button>

                <Button
                  variant={isCameraOn ? "outline" : "destructive"}
                  size="icon"
                  onClick={toggleCamera}
                  className="rounded-full h-12 w-12"
                >
                  {isCameraOn ? <Camera className="h-5 w-5" /> : <CameraOff className="h-5 w-5" />}
                </Button>

                <Button variant="destructive" size="icon" className="rounded-full h-12 w-12">
                  <Phone className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Tabs defaultValue="chat">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="h-[calc(100vh-16rem)]">
              <Card>
                <CardContent className="p-4 h-full flex flex-col">
                  <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                    <div className="flex items-start gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=32&width=32"
                          alt="Doctor"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                      <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                        <p className="text-sm">Hello! How are you feeling today?</p>
                        <span className="text-xs text-muted-foreground">10:02 AM</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 flex-row-reverse">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=32&width=32"
                          alt="You"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[80%]">
                        <p className="text-sm">I've been having some chest pain since yesterday.</p>
                        <span className="text-xs text-primary-foreground/70">10:03 AM</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=32&width=32"
                          alt="Doctor"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                      <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                        <p className="text-sm">
                          I'm sorry to hear that. Can you describe the pain? Is it sharp or dull?
                        </p>
                        <span className="text-xs text-muted-foreground">10:04 AM</span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <Input
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button type="submit" size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notes" className="h-[calc(100vh-16rem)]">
              <Card>
                <CardContent className="p-4 h-full flex flex-col">
                  <Textarea
                    placeholder="Take notes during your consultation..."
                    className="flex-1 min-h-[300px] mb-4"
                  />
                  <div className="flex justify-between">
                    <Button variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Save Notes
                    </Button>
                    <Button>
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Share with Doctor
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

