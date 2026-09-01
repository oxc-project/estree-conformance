__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 30
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 33,
                  "end": 34
                },
                "definite": false,
                "start": 25,
                "end": 34
              }
            ],
            "declare": false,
            "start": 19,
            "end": 35
          }
        ],
        "start": 13,
        "end": 37
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 50
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 60
            },
            "initializer": null,
            "computed": false,
            "start": 57,
            "end": 60
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TWO",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 69
            },
            "initializer": null,
            "computed": false,
            "start": 66,
            "end": 69
          }
        ],
        "start": 51,
        "end": 71
      },
      "const": false,
      "declare": false,
      "start": 39,
      "end": 71
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 83
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 83
          },
          "exportKind": "value",
          "start": 81,
          "end": 83
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "AnEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 91
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "AnEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 91
          },
          "exportKind": "value",
          "start": 85,
          "end": 91
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 95
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "FooBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 105
          },
          "exportKind": "value",
          "start": 93,
          "end": 105
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "AnEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 113
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "BarEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 124
          },
          "exportKind": "value",
          "start": 107,
          "end": 124
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 73,
      "end": 126
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 126
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 25,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 39,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "AnEnum",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "ONE",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "TWO",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 81,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "AnEnum",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 93,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 96,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "FooBar",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "AnEnum",
    "start": 107,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 114,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "BarEnum",
    "start": 117,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  }
]
```
