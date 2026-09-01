__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 32,
                      "end": 38
                    },
                    "start": 32,
                    "end": 40
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 43,
                    "end": 47
                  }
                ],
                "start": 32,
                "end": 47
              },
              "start": 30,
              "end": 47
            },
            "start": 26,
            "end": 47
          },
          "init": null,
          "definite": false,
          "start": 26,
          "end": 47
        }
      ],
      "declare": true,
      "start": 12,
      "end": 48
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 61
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 62
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 69
          },
          "definite": false,
          "start": 55,
          "end": 69
        }
      ],
      "declare": false,
      "start": 49,
      "end": 70
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 12,
  "end": 79
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 12,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 20,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 26,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 41,
    "end": 42
  },
  {
    "type": "Null",
    "value": "null",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 56,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  }
]
```
