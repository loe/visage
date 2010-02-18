#!/usr/bin/env ruby

begin
  # Require the preresolved locked set of gems.
  require File.expand_path('.bundle/environment', __FILE__)
rescue LoadError
  # Fallback on doing the resolve at runtime.
  require "rubygems"
  require "bundler"
  Bundler.setup
end

require 'visage'

log = File.new('log/visage.log', 'a')
$stdout.reopen(log)
$stderr.reopen(log)

run Sinatra::Application