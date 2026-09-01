__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 17
          },
          "importKind": "value",
          "start": 15,
          "end": 17
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 28
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 28
          },
          "importKind": "value",
          "start": 19,
          "end": 28
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 33
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 33
          },
          "importKind": "value",
          "start": 30,
          "end": 33
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 38
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 38
          },
          "importKind": "value",
          "start": 35,
          "end": 38
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./exports.js",
        "raw": "\"./exports.js\"",
        "start": 46,
        "end": 60
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 61
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
      },
      "directive": null,
      "start": 62,
      "end": 67
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "as",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 70
      },
      "directive": null,
      "start": 68,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "something",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 118
      },
      "directive": null,
      "start": 109,
      "end": 119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 160
      },
      "directive": null,
      "start": 157,
      "end": 161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 202
      },
      "directive": null,
      "start": 199,
      "end": 203
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 241
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 15,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 19,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 41,
    "end": 45
  },
  {
    "type": "String",
    "value": "\"./exports.js\"",
    "start": 46,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 68,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 109,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  }
]
```
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
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 13,
            "end": 14
          },
          "definite": false,
          "start": 6,
          "end": 14
        }
      ],
      "declare": false,
      "start": 0,
      "end": 15
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 24
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 27,
            "end": 28
          },
          "definite": false,
          "start": 22,
          "end": 28
        }
      ],
      "declare": false,
      "start": 16,
      "end": 29
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 45
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 48,
            "end": 49
          },
          "definite": false,
          "start": 36,
          "end": 49
        }
      ],
      "declare": false,
      "start": 30,
      "end": 50
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
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 64
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 64
          },
          "exportKind": "value",
          "start": 60,
          "end": 64
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 51,
      "end": 67
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
            "name": "as",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 84
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 84
          },
          "exportKind": "type",
          "start": 77,
          "end": 84
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 68,
      "end": 87
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
            "name": "something",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 111
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 111
          },
          "exportKind": "type",
          "start": 97,
          "end": 111
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 88,
      "end": 114
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
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 133
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 140
          },
          "exportKind": "type",
          "start": 124,
          "end": 140
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 115,
      "end": 143
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
            "name": "as",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 160
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 167
          },
          "exportKind": "type",
          "start": 153,
          "end": 167
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 144,
      "end": 170
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
            "name": "something",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 199
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "whatever",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 211
          },
          "exportKind": "type",
          "start": 185,
          "end": 211
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 171,
      "end": 214
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 223
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 16,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 22,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 25,
    "end": 26
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "const",
    "start": 30,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 36,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 77,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 97,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 102,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 124,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 129,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 134,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 153,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 158,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 161,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 171,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 178,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 185,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 190,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 200,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "whatever",
    "start": 203,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  }
]
```
