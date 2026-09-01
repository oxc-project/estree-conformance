__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": "hello",
        "raw": "\"hello\"",
        "start": 15,
        "end": 22
      },
      "exportKind": "value",
      "start": 0,
      "end": 23
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 24
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 7,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./t1",
          "raw": "\"./t1\"",
          "start": 19,
          "end": 25
        },
        "start": 11,
        "end": 26
      },
      "importKind": "value",
      "start": 0,
      "end": 27
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 28,
          "end": 29
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 37
        },
        "optional": false,
        "computed": false,
        "start": 28,
        "end": 37
      },
      "directive": null,
      "start": 28,
      "end": 38
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "start": 46,
          "end": 47
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 53,
        "end": 59
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 62
      },
      "directive": null,
      "start": 61,
      "end": 63
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 77
          },
          "start": 71,
          "end": 77
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 83,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 64,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 92
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 100
        },
        "optional": false,
        "computed": false,
        "start": 91,
        "end": 100
      },
      "directive": null,
      "start": 91,
      "end": 101
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 118
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 123
          },
          "importKind": "value",
          "start": 111,
          "end": 123
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 131,
        "end": 137
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 102,
      "end": 138
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 140
      },
      "directive": null,
      "start": 139,
      "end": 141
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 151
          },
          "start": 149,
          "end": 151
        },
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 160
          },
          "start": 153,
          "end": 160
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 166,
        "end": 172
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 142,
      "end": 173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 176
      },
      "directive": null,
      "start": 174,
      "end": 177
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "e2",
          "optional": false,
          "typeAnnotation": null,
          "start": 178,
          "end": 180
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 188
        },
        "optional": false,
        "computed": false,
        "start": 178,
        "end": 188
      },
      "directive": null,
      "start": 178,
      "end": 189
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 199
          },
          "start": 197,
          "end": 199
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 210
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 216
          },
          "importKind": "value",
          "start": 203,
          "end": 216
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 224,
        "end": 230
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 190,
      "end": 231
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 234
      },
      "directive": null,
      "start": 232,
      "end": 235
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 238
      },
      "directive": null,
      "start": 236,
      "end": 239
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 247,
        "end": 253
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 240,
      "end": 254
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 255
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
    "type": "Identifier",
    "value": "a",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 11,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"./t1\"",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "default",
    "start": 30,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 39,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 48,
    "end": 52
  },
  {
    "type": "String",
    "value": "\"./t1\"",
    "start": 53,
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
    "value": "b",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 73,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 78,
    "end": 82
  },
  {
    "type": "String",
    "value": "\"./t1\"",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 93,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 102,
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
    "value": "default",
    "start": 111,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 119,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 126,
    "end": 130
  },
  {
    "type": "String",
    "value": "\"./t1\"",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 142,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 155,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 158,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 161,
    "end": 165
  },
  {
    "type": "String",
    "value": "\"./t1\"",
    "start": 166,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 174,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 181,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 190,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 203,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 211,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 214,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 219,
    "end": 223
  },
  {
    "type": "String",
    "value": "\"./t1\"",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 236,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 240,
    "end": 246
  },
  {
    "type": "String",
    "value": "\"./t1\"",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./t1",
          "raw": "\"./t1\"",
          "start": 19,
          "end": 25
        },
        "start": 11,
        "end": 26
      },
      "importKind": "value",
      "start": 0,
      "end": 27
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 28,
          "end": 29
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 37
        },
        "optional": false,
        "computed": false,
        "start": 28,
        "end": 37
      },
      "directive": null,
      "start": 28,
      "end": 38
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "start": 46,
          "end": 47
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 53,
        "end": 59
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 62
      },
      "directive": null,
      "start": 61,
      "end": 63
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 77
          },
          "start": 71,
          "end": 77
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 83,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 64,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 92
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 100
        },
        "optional": false,
        "computed": false,
        "start": 91,
        "end": 100
      },
      "directive": null,
      "start": 91,
      "end": 101
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 118
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 123
          },
          "importKind": "value",
          "start": 111,
          "end": 123
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 131,
        "end": 137
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 102,
      "end": 138
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 140
      },
      "directive": null,
      "start": 139,
      "end": 141
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 151
          },
          "start": 149,
          "end": 151
        },
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 160
          },
          "start": 153,
          "end": 160
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 166,
        "end": 172
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 142,
      "end": 173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 176
      },
      "directive": null,
      "start": 174,
      "end": 177
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "e2",
          "optional": false,
          "typeAnnotation": null,
          "start": 178,
          "end": 180
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 188
        },
        "optional": false,
        "computed": false,
        "start": 178,
        "end": 188
      },
      "directive": null,
      "start": 178,
      "end": 189
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 199
          },
          "start": 197,
          "end": 199
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 210
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 216
          },
          "importKind": "value",
          "start": 203,
          "end": 216
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./t1",
        "raw": "\"./t1\"",
        "start": 224,
        "end": 230
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 190,
      "end": 231
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 234
      },
      "directive": null,
      "start": 232,
      "end": 235
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 238
      },
      "directive": null,
      "start": 236,
      "end": 239
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 250
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 250
          },
          "exportKind": "value",
          "start": 249,
          "end": 250
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 253
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 253
          },
          "exportKind": "value",
          "start": 252,
          "end": 253
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 256
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 256
          },
          "exportKind": "value",
          "start": 255,
          "end": 256
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 259
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 259
          },
          "exportKind": "value",
          "start": 258,
          "end": 259
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 261,
            "end": 263
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 261,
            "end": 263
          },
          "exportKind": "value",
          "start": 261,
          "end": 263
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 267
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 267
          },
          "exportKind": "value",
          "start": 265,
          "end": 267
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 271
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 271
          },
          "exportKind": "value",
          "start": 269,
          "end": 271
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 275
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 275
          },
          "exportKind": "value",
          "start": 273,
          "end": 275
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 240,
      "end": 278
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 278
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
    "type": "Identifier",
    "value": "a",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 11,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"./t1\"",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "default",
    "start": 30,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 39,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 48,
    "end": 52
  },
  {
    "type": "String",
    "value": "\"./t1\"",
    "start": 53,
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
    "value": "b",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 73,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 78,
    "end": 82
  },
  {
    "type": "String",
    "value": "\"./t1\"",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 93,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 102,
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
    "value": "default",
    "start": 111,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 119,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 126,
    "end": 130
  },
  {
    "type": "String",
    "value": "\"./t1\"",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 142,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 155,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 158,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 161,
    "end": 165
  },
  {
    "type": "String",
    "value": "\"./t1\"",
    "start": 166,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 174,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 181,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 190,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 203,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 211,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 214,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 219,
    "end": 223
  },
  {
    "type": "String",
    "value": "\"./t1\"",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 236,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 261,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 265,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 273,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  }
]
```
