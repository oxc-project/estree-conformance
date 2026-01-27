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
        "name": "notok",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 22,
        "end": 25
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 9,
      "end": 25
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "not",
          "optional": false,
          "typeAnnotation": null,
          "start": 33,
          "end": 36
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ok",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 39
        },
        "start": 33,
        "end": 39
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 40,
        "end": 43
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 26,
      "end": 43
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bad",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 62
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 63,
        "end": 66
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 44,
      "end": 66
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "also",
          "optional": false,
          "typeAnnotation": null,
          "start": 82,
          "end": 86
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bad",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 90
        },
        "start": 82,
        "end": 90
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 91,
        "end": 94
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 67,
      "end": 94
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "good",
        "raw": "\"good\"",
        "start": 142,
        "end": 148
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 149,
        "end": 152
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 127,
      "end": 152
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 9,
  "end": 153
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "module",
    "start": 9,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "notok",
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 26,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "not",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "ok",
    "start": 37,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 44,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 52,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "bad",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 67,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 75,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "also",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "bad",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 127,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 135,
    "end": 141
  },
  {
    "type": "String",
    "value": "\"good\"",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  }
]
```
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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 19,
        "end": 22
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 38,
          "end": 41
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 42,
          "end": 45
        },
        "start": 38,
        "end": 45
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 46,
        "end": 49
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 23,
      "end": 49
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "alsogood",
        "raw": "\"alsogood\"",
        "start": 97,
        "end": 107
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 108,
        "end": 111
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 82,
      "end": 111
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "exported",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 135
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [],
          "start": 136,
          "end": 139
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 120,
        "end": 139
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 113,
      "end": 139
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "exported",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 162
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "sub",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 166
          },
          "start": 154,
          "end": 166
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [],
          "start": 167,
          "end": 170
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 147,
        "end": 170
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 140,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 170
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
    "type": "Identifier",
    "value": "foo",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 23,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 31,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 38,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 82,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 90,
    "end": 96
  },
  {
    "type": "String",
    "value": "\"alsogood\"",
    "start": 97,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 113,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 120,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "exported",
    "start": 127,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 140,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 147,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "exported",
    "start": 154,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "sub",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  }
]
```
