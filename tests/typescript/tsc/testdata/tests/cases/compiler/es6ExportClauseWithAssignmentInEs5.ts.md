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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 10,
            "end": 11
          },
          "definite": false,
          "start": 4,
          "end": 11
        }
      ],
      "declare": false,
      "start": 0,
      "end": 12
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 16
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 19,
          "end": 20
        },
        "start": 13,
        "end": 20
      },
      "directive": null,
      "start": 13,
      "end": 21
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 30
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 33,
            "end": 34
          },
          "definite": false,
          "start": 27,
          "end": 34
        }
      ],
      "declare": false,
      "start": 23,
      "end": 35
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 36,
          "end": 39
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 42,
          "end": 43
        },
        "start": 36,
        "end": 43
      },
      "directive": null,
      "start": 36,
      "end": 44
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "buzz",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 54
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 57,
            "end": 59
          },
          "definite": false,
          "start": 50,
          "end": 59
        }
      ],
      "declare": false,
      "start": 46,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "buzz",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 65
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 69,
          "end": 70
        },
        "start": 61,
        "end": 70
      },
      "directive": null,
      "start": 61,
      "end": 71
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bizz",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 81
          },
          "init": {
            "type": "Literal",
            "value": 8,
            "raw": "8",
            "start": 84,
            "end": 85
          },
          "definite": false,
          "start": 77,
          "end": 85
        }
      ],
      "declare": false,
      "start": 73,
      "end": 86
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "bizz",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 91
        },
        "start": 87,
        "end": 93
      },
      "directive": null,
      "start": 87,
      "end": 94
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "bizz",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 144
        },
        "start": 140,
        "end": 146
      },
      "directive": null,
      "start": 140,
      "end": 147
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "bizz",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 167
        },
        "start": 161,
        "end": 167
      },
      "directive": null,
      "start": 161,
      "end": 168
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 219
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 219
          },
          "exportKind": "value",
          "start": 216,
          "end": 219
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 224
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 224
          },
          "exportKind": "value",
          "start": 221,
          "end": 224
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 229
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "quux",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 237
          },
          "exportKind": "value",
          "start": 226,
          "end": 237
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "buzz",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 243
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "buzz",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 243
          },
          "exportKind": "value",
          "start": 239,
          "end": 243
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bizz",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 249
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bizz",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 249
          },
          "exportKind": "value",
          "start": 245,
          "end": 249
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 207,
      "end": 252
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 252
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
    "value": "foo",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 23,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 27,
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
    "value": "3",
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
    "type": "Identifier",
    "value": "baz",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 40,
    "end": 41
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 46,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "buzz",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 57,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "buzz",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 66,
    "end": 68
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 73,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "bizz",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "bizz",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 91,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "bizz",
    "start": 140,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 161,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "bizz",
    "start": 163,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 226,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 230,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "quux",
    "start": 233,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "buzz",
    "start": 239,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "bizz",
    "start": 245,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  }
]
```
