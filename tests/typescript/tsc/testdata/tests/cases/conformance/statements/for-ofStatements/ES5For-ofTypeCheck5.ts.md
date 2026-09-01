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
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 11,
                    "end": 17
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 20,
                      "end": 26
                    },
                    "start": 20,
                    "end": 28
                  }
                ],
                "start": 11,
                "end": 28
              },
              "start": 9,
              "end": 28
            },
            "start": 4,
            "end": 28
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 28
        }
      ],
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "init": null,
            "definite": false,
            "start": 39,
            "end": 40
          }
        ],
        "declare": false,
        "start": 35,
        "end": 40
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "union",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 49
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 51,
        "end": 54
      },
      "start": 30,
      "end": 54
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 54
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
    "value": "union",
    "start": 4,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 11,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 41,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 44,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  }
]
```
