import React from 'react';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { View } from 'react-native';
import { useRouter } from 'expo-router';

export type ITaskDetailProps = {
    
}

const TaskDetail: React.FC<ITaskDetailProps> = ({ }) => {
    const router = useRouter();
    return (
        <View>
            <Text>Task Detail</Text>
          
        </View>
    );
}

export  default TaskDetail;