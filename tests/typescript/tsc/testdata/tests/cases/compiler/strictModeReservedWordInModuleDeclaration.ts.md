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
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "public",
        "optional": false,
        "typeAnnotation": null,
        "start": 23,
        "end": 29
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 30,
        "end": 33
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 13,
      "end": 33
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "private",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 51
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 52,
        "end": 55
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 34,
      "end": 55
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "public",
          "optional": false,
          "typeAnnotation": null,
          "start": 66,
          "end": 72
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "whatever",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 81
        },
        "start": 66,
        "end": 81
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 82,
        "end": 85
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 56,
      "end": 85
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "private",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 103
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "public",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 110
          },
          "start": 96,
          "end": 110
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 114
        },
        "start": 96,
        "end": 114
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 115,
        "end": 118
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 86,
      "end": 118
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 118
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 0,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 13,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 34,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 44,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 56,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "whatever",
    "start": 73,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 86,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 96,
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
    "value": "public",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  }
]
```
