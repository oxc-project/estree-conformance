__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 586,
        "end": 598
      },
      "directive": "use strict",
      "start": 586,
      "end": 599
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 600,
        "end": 612
      },
      "directive": "use strict",
      "start": 600,
      "end": 613
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotEarlyError",
        "optional": false,
        "typeAnnotation": null,
        "start": 620,
        "end": 633
      },
      "start": 614,
      "end": 634
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "public",
            "optional": false,
            "typeAnnotation": null,
            "start": 639,
            "end": 645
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 648,
            "end": 649
          },
          "definite": false,
          "start": 639,
          "end": 649
        }
      ],
      "declare": false,
      "start": 635,
      "end": 650
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 586,
  "end": 650
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 586,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 598,
    "end": 599
  },
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 600,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 614,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "NotEarlyError",
    "start": 620,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 635,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 639,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 646,
    "end": 647
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  }
]
```
