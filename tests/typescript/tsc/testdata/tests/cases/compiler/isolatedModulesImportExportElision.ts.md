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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "module",
        "raw": "\"module\"",
        "start": 16,
        "end": 24
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 24
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 35
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 35
          },
          "importKind": "value",
          "start": 33,
          "end": 35
        }
      ],
      "source": {
        "type": "Literal",
        "value": "module",
        "raw": "\"module\"",
        "start": 42,
        "end": 50
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 25,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 65
          },
          "start": 58,
          "end": 65
        }
      ],
      "source": {
        "type": "Literal",
        "value": "module",
        "raw": "\"module\"",
        "start": 71,
        "end": 79
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 79
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 88
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 99
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 100,
          "end": 101
        },
        "optional": false,
        "computed": false,
        "start": 97,
        "end": 101
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 102,
        "end": 105
      },
      "abstract": false,
      "declare": false,
      "start": 81,
      "end": 105
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 112
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "typeArguments": null,
            "arguments": [],
            "start": 115,
            "end": 122
          },
          "definite": false,
          "start": 111,
          "end": 122
        }
      ],
      "declare": false,
      "start": 107,
      "end": 123
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 129
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 134
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 140
            },
            "optional": false,
            "computed": false,
            "start": 132,
            "end": 140
          },
          "definite": false,
          "start": 128,
          "end": 140
        }
      ],
      "declare": false,
      "start": 124,
      "end": 141
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 153
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 153
          },
          "exportKind": "value",
          "start": 151,
          "end": 153
        }
      ],
      "source": {
        "type": "Literal",
        "value": "module",
        "raw": "\"module\"",
        "start": 160,
        "end": 168
      },
      "exportKind": "value",
      "attributes": [],
      "start": 143,
      "end": 169
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "definite": false,
            "start": 181,
            "end": 186
          }
        ],
        "declare": false,
        "start": 177,
        "end": 187
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 170,
      "end": 187
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 187
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
    "value": "c",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"module\"",
    "start": 16,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 37,
    "end": 41
  },
  {
    "type": "String",
    "value": "\"module\"",
    "start": 42,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 60,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 63,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 66,
    "end": 70
  },
  {
    "type": "String",
    "value": "\"module\"",
    "start": 71,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 81,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 89,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 97,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 107,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 115,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 124,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 132,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 135,
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
    "value": "export",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 151,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 155,
    "end": 159
  },
  {
    "type": "String",
    "value": "\"module\"",
    "start": 160,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 170,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 177,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  }
]
```
