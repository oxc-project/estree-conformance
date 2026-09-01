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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 29
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 31
              },
              "start": 28,
              "end": 31
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 32,
              "end": 35
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 18,
            "end": 35
          }
        ],
        "start": 12,
        "end": 65
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 65
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 78
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 103
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 105
                },
                "start": 102,
                "end": 105
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [],
                "start": 106,
                "end": 109
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 92,
              "end": 109
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 85,
            "end": 109
          }
        ],
        "start": 79,
        "end": 137
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 67,
      "end": 137
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 150
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "U",
          "optional": false,
          "typeAnnotation": null,
          "start": 151,
          "end": 152
        },
        "start": 149,
        "end": 152
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 153,
        "end": 184
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 139,
      "end": 184
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 184
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
    "value": "M",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 18,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 67,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 85,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 92,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "S",
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
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 139,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184
  }
]
```
