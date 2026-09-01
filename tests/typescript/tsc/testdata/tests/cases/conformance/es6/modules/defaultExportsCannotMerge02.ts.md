__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Decl",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 25
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 26,
          "end": 29
        },
        "abstract": false,
        "declare": false,
        "start": 15,
        "end": 29
      },
      "exportKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Decl",
          "optional": false,
          "typeAnnotation": null,
          "start": 48,
          "end": 52
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 61
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 63,
                  "end": 69
                },
                "start": 61,
                "end": 69
              },
              "accessibility": null,
              "static": false,
              "start": 59,
              "end": 70
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 77
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 79,
                  "end": 85
                },
                "start": 77,
                "end": 85
              },
              "accessibility": null,
              "static": false,
              "start": 75,
              "end": 86
            }
          ],
          "start": 53,
          "end": 88
        },
        "declare": false,
        "start": 38,
        "end": 88
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 31,
      "end": 88
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Decl",
          "optional": false,
          "typeAnnotation": null,
          "start": 107,
          "end": 111
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 129
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 130,
                "end": 137
              },
              "declare": false,
              "start": 118,
              "end": 137
            }
          ],
          "start": 112,
          "end": 139
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 97,
        "end": 139
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 90,
      "end": 139
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 140
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
    "type": "Keyword",
    "value": "class",
    "start": 15,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "Decl",
    "start": 21,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 31,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 38,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Decl",
    "start": 48,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 59,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 90,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 97,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "Decl",
    "start": 107,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 118,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
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
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "m1",
        "raw": "\"m1\"",
        "start": 19,
        "end": 23
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 23
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Entity",
          "optional": false,
          "typeAnnotation": null,
          "start": 25,
          "end": 31
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 25,
        "end": 33
      },
      "directive": null,
      "start": 25,
      "end": 34
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Entity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 49
                },
                "typeArguments": null,
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "start": 40,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 40,
          "end": 49
        }
      ],
      "declare": false,
      "start": 36,
      "end": 50
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Entity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 58,
                    "end": 64
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 66
                  },
                  "start": 58,
                  "end": 66
                },
                "typeArguments": null,
                "start": 58,
                "end": 66
              },
              "start": 56,
              "end": 66
            },
            "start": 55,
            "end": 66
          },
          "init": null,
          "definite": false,
          "start": 55,
          "end": 66
        }
      ],
      "declare": false,
      "start": 51,
      "end": 67
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 73
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Entity",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 86
            },
            "typeArguments": null,
            "arguments": [],
            "start": 76,
            "end": 88
          },
          "definite": false,
          "start": 72,
          "end": 88
        }
      ],
      "declare": false,
      "start": 68,
      "end": 89
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
            "name": "sum",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 97
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 101
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 104
              },
              "optional": false,
              "computed": false,
              "start": 100,
              "end": 104
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 108
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 111
              },
              "optional": false,
              "computed": false,
              "start": 107,
              "end": 111
            },
            "start": 100,
            "end": 111
          },
          "definite": false,
          "start": 94,
          "end": 111
        }
      ],
      "declare": false,
      "start": 90,
      "end": 111
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 111
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
    "value": "Entity",
    "start": 7,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 14,
    "end": 18
  },
  {
    "type": "String",
    "value": "\"m1\"",
    "start": 19,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "Entity",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 36,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "Entity",
    "start": 43,
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
    "value": "var",
    "start": 51,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "Entity",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "value": "var",
    "start": 68,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "Entity",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 90,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "sum",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 102,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 109,
    "end": 111
  }
]
```
