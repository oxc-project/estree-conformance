__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 8,
                    "end": 11
                  }
                ],
                "start": 7,
                "end": 12
              },
              "start": 5,
              "end": 12
            },
            "start": 4,
            "end": 12
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 20
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 24
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 37
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 39,
                  "end": 43
                }
              ],
              "start": 27,
              "end": 44
            },
            "start": 23,
            "end": 44
          },
          "definite": false,
          "start": 19,
          "end": 44
        }
      ],
      "declare": false,
      "start": 15,
      "end": 45
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 45
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 8,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 15,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 28,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "Null",
    "value": "null",
    "start": 39,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  }
]
```
