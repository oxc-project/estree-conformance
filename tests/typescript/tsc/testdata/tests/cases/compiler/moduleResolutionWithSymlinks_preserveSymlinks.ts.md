__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "real",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "real",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "exportKind": "value",
          "start": 9,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "real",
        "raw": "\"real\"",
        "start": 21,
        "end": 27
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 28
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 42,
          "end": 43
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 55
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 46,
              "end": 56
            }
          ],
          "start": 44,
          "end": 58
        },
        "abstract": false,
        "declare": false,
        "start": 36,
        "end": 58
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 29,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 59
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "real",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 16,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"real\"",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 29,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 36,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 46,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "real",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 19,
                  "end": 25
                },
                "start": 17,
                "end": 25
              },
              "start": 13,
              "end": 25
            },
            "init": null,
            "definite": false,
            "start": 13,
            "end": 25
          }
        ],
        "declare": false,
        "start": 7,
        "end": 26
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 26
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 27
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
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "real",
    "start": 13,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 115
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 121
          },
          "importKind": "value",
          "start": 114,
          "end": 121
        }
      ],
      "source": {
        "type": "Literal",
        "value": "linked",
        "raw": "\"linked\"",
        "start": 129,
        "end": 137
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 105,
      "end": 138
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 149
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 155
          },
          "importKind": "value",
          "start": 148,
          "end": 155
        }
      ],
      "source": {
        "type": "Literal",
        "value": "linked2",
        "raw": "\"linked2\"",
        "start": 163,
        "end": 172
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 139,
      "end": 173
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
            "start": 179,
            "end": 180
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 189
            },
            "typeArguments": null,
            "arguments": [],
            "start": 183,
            "end": 191
          },
          "definite": false,
          "start": 179,
          "end": 191
        }
      ],
      "declare": false,
      "start": 175,
      "end": 192
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 244,
          "end": 245
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 254
          },
          "typeArguments": null,
          "arguments": [],
          "start": 248,
          "end": 256
        },
        "start": 244,
        "end": 256
      },
      "directive": null,
      "start": 244,
      "end": 257
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 105,
  "end": 257
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 116,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 124,
    "end": 128
  },
  {
    "type": "String",
    "value": "\"linked\"",
    "start": 129,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 150,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 158,
    "end": 162
  },
  {
    "type": "String",
    "value": "\"linked2\"",
    "start": 163,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 175,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 183,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 248,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  }
]
```
