__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 7,
        "end": 11
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 13,
        "end": 16
      },
      "start": 0,
      "end": 16
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 29
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "initializer": null,
            "computed": false,
            "start": 32,
            "end": 33
          }
        ],
        "start": 30,
        "end": 35
      },
      "const": true,
      "declare": false,
      "start": 17,
      "end": 35
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A4",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 49
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 63,
              "end": 67
            },
            "body": {
              "type": "EmptyStatement",
              "start": 68,
              "end": 69
            },
            "start": 56,
            "end": 69
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSEnumDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 107,
                    "end": 108
                  },
                  "body": {
                    "type": "TSEnumBody",
                    "members": [
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 111,
                          "end": 112
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 111,
                        "end": 112
                      }
                    ],
                    "start": 109,
                    "end": 114
                  },
                  "const": true,
                  "declare": false,
                  "start": 96,
                  "end": 114
                }
              ],
              "start": 86,
              "end": 120
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 74,
            "end": 120
          }
        ],
        "start": 50,
        "end": 122
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 37,
      "end": 122
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 123
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "while",
    "start": 0,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6,
    "end": 7
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 17,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 23,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 37,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "A4",
    "start": 47,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 56,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 74,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 96,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 102,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  }
]
```
