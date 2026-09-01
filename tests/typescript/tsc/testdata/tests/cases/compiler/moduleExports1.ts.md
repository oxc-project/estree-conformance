__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "TSQualifiedName",
          "left": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeScript",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 27
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Strasse",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 35
            },
            "start": 17,
            "end": 35
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Street",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 42
          },
          "start": 17,
          "end": 42
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 62
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
                        "name": "address",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 74,
                        "end": 81
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 82,
                          "end": 88
                        },
                        "start": 81,
                        "end": 88
                      },
                      "value": null,
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": "public",
                      "start": 67,
                      "end": 89
                    }
                  ],
                  "start": 63,
                  "end": 92
                },
                "abstract": false,
                "declare": false,
                "start": 53,
                "end": 92
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 46,
              "end": 92
            }
          ],
          "start": 43,
          "end": 95
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 95
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 95
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
            "name": "rue",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 104
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TypeScript",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 111,
                    "end": 121
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strasse",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 122,
                    "end": 129
                  },
                  "optional": false,
                  "computed": false,
                  "start": 111,
                  "end": 129
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Street",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 136
                },
                "optional": false,
                "computed": false,
                "start": 111,
                "end": 136
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Rue",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 140
              },
              "optional": false,
              "computed": false,
              "start": 111,
              "end": 140
            },
            "typeArguments": null,
            "arguments": [],
            "start": 107,
            "end": 142
          },
          "definite": false,
          "start": 101,
          "end": 142
        }
      ],
      "declare": false,
      "start": 97,
      "end": 143
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "rue",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 148
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "address",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 156
          },
          "optional": false,
          "computed": false,
          "start": 145,
          "end": 156
        },
        "right": {
          "type": "Literal",
          "value": "1 Main Street",
          "raw": "\"1 Main Street\"",
          "start": 159,
          "end": 174
        },
        "start": 145,
        "end": 174
      },
      "directive": null,
      "start": 145,
      "end": 175
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 182,
          "end": 183
        },
        "prefix": true,
        "start": 177,
        "end": 183
      },
      "directive": null,
      "start": 177,
      "end": 184
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 197
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 205
          },
          "optional": false,
          "computed": false,
          "start": 191,
          "end": 205
        },
        "prefix": true,
        "start": 190,
        "end": 205
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 213
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 221
            },
            "optional": false,
            "computed": false,
            "start": 207,
            "end": 221
          },
          "right": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 224,
            "end": 226
          },
          "start": 207,
          "end": 226
        },
        "directive": null,
        "start": 207,
        "end": 227
      },
      "alternate": null,
      "start": 186,
      "end": 227
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 227
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
    "type": "Identifier",
    "value": "namespace",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "TypeScript",
    "start": 17,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "Strasse",
    "start": 28,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Street",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 46,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 53,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Rue",
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
    "type": "Keyword",
    "value": "public",
    "start": 67,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "address",
    "start": 74,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "rue",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 107,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "TypeScript",
    "start": 111,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "Strasse",
    "start": 122,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "Street",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Rue",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "rue",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "address",
    "start": 149,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "String",
    "value": "\"1 Main Street\"",
    "start": 159,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 177,
    "end": 181
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 191,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 198,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 214,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  }
]
```
