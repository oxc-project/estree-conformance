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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
      },
      "exportKind": "value",
      "start": 12,
      "end": 29
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 30
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
    "value": "a",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 8,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 12,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 19,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 21
          },
          "start": 7,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingMergeErrors_0",
        "raw": "\"./es6ImportDefaultBindingMergeErrors_0\"",
        "start": 27,
        "end": 67
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 68
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defaultBinding",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 93
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 94,
        "end": 111
      },
      "declare": false,
      "start": 69,
      "end": 111
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 117
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 134
          },
          "definite": false,
          "start": 116,
          "end": 134
        }
      ],
      "declare": false,
      "start": 112,
      "end": 135
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 158
          },
          "start": 143,
          "end": 158
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingMergeErrors_0",
        "raw": "\"./es6ImportDefaultBindingMergeErrors_0\"",
        "start": 164,
        "end": 204
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 136,
      "end": 205
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
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 244
          },
          "init": {
            "type": "Literal",
            "value": "hello world",
            "raw": "\"hello world\"",
            "start": 247,
            "end": 260
          },
          "definite": false,
          "start": 229,
          "end": 260
        }
      ],
      "declare": false,
      "start": 225,
      "end": 261
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 285
          },
          "start": 270,
          "end": 285
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingMergeErrors_0",
        "raw": "\"./es6ImportDefaultBindingMergeErrors_0\"",
        "start": 291,
        "end": 331
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 263,
      "end": 332
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 374
          },
          "start": 359,
          "end": 374
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingMergeErrors_0",
        "raw": "\"./es6ImportDefaultBindingMergeErrors_0\"",
        "start": 380,
        "end": 420
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 352,
      "end": 421
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 440
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
    "value": "defaultBinding",
    "start": 7,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 22,
    "end": 26
  },
  {
    "type": "String",
    "value": "\"./es6ImportDefaultBindingMergeErrors_0\"",
    "start": 27,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 69,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "defaultBinding",
    "start": 79,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 112,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "defaultBinding",
    "start": 120,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 136,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "defaultBinding2",
    "start": 143,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 159,
    "end": 163
  },
  {
    "type": "String",
    "value": "\"./es6ImportDefaultBindingMergeErrors_0\"",
    "start": 164,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 225,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "defaultBinding2",
    "start": 229,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "String",
    "value": "\"hello world\"",
    "start": 247,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 263,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "defaultBinding3",
    "start": 270,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 286,
    "end": 290
  },
  {
    "type": "String",
    "value": "\"./es6ImportDefaultBindingMergeErrors_0\"",
    "start": 291,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 352,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "defaultBinding3",
    "start": 359,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 375,
    "end": 379
  },
  {
    "type": "String",
    "value": "\"./es6ImportDefaultBindingMergeErrors_0\"",
    "start": 380,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  }
]
```
