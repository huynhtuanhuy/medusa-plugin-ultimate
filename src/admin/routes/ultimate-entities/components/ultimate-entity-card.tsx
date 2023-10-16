import { startCase, trim } from "lodash";
import { Container, Text, Badge } from "@medusajs/ui";
import { UltimateEntity } from "../../../../types/ultimate-entity";

interface UltimateEntityCardProps {
  entity: UltimateEntity;
}

const UltimateEntityCard = ({ entity }: UltimateEntityCardProps) => {
  return (
    <Container>
      <div className="w-full h-full flex flex-col gap-1">
        <Badge size="large">{startCase(entity.name || entity.id)}</Badge>
        <Text
          className="inter-small-regular text-grey-50 line-clamp-2 max-w-[460px]"
          size="small"
        >
          {entity.description || entity.id}
        </Text>
      </div>
    </Container>
  );
};

export default UltimateEntityCard;
