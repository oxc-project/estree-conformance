__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mergeStringLists",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 83
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strings",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 94
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
              },
              "start": 96,
              "end": 104
            },
            "start": 94,
            "end": 104
          },
          "value": null,
          "start": 84,
          "end": 104
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 124
                  },
                  "init": null,
                  "definite": false,
                  "start": 121,
                  "end": 124
                }
              ],
              "declare": false,
              "start": 117,
              "end": 124
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "strings",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 135
            },
            "body": {
              "type": "EmptyStatement",
              "start": 136,
              "end": 137
            },
            "start": 112,
            "end": 137
          }
        ],
        "start": 106,
        "end": 139
      },
      "expression": false,
      "start": 56,
      "end": 139
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 139
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 56,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "mergeStringLists",
    "start": 67,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "strings",
    "start": 87,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 112,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 121,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 125,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "strings",
    "start": 128,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  }
]
```
