__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./relativeModule",
        "raw": "\"./relativeModule\"",
        "start": 15,
        "end": 33
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 47,
                      "end": 53
                    },
                    "start": 45,
                    "end": 53
                  },
                  "start": 44,
                  "end": 53
                },
                "init": null,
                "definite": false,
                "start": 44,
                "end": 53
              }
            ],
            "declare": false,
            "start": 40,
            "end": 54
          }
        ],
        "start": 34,
        "end": 56
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": ".\\relativeModule",
        "raw": "\".\\\\relativeModule\"",
        "start": 73,
        "end": 92
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 106,
                      "end": 112
                    },
                    "start": 104,
                    "end": 112
                  },
                  "start": 103,
                  "end": 112
                },
                "init": null,
                "definite": false,
                "start": 103,
                "end": 112
              }
            ],
            "declare": false,
            "start": 99,
            "end": 113
          }
        ],
        "start": 93,
        "end": 115
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 58,
      "end": 115
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 115
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"./relativeModule\"",
    "start": 15,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 40,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 58,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 66,
    "end": 72
  },
  {
    "type": "String",
    "value": "\".\\\\relativeModule\"",
    "start": 73,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 99,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  }
]
```
