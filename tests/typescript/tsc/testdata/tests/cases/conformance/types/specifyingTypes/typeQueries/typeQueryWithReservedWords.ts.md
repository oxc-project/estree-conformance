__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Controller",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 16
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 29
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 32,
                "end": 39
              },
              "expression": false,
              "start": 29,
              "end": 39
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 23,
            "end": 39
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "delete",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 50
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 53,
                "end": 60
              },
              "expression": false,
              "start": 50,
              "end": 60
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 44,
            "end": 60
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "var",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 68
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 71,
                "end": 78
              },
              "expression": false,
              "start": 68,
              "end": 78
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 65,
            "end": 78
          }
        ],
        "start": 17,
        "end": 80
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 80
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IScope",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 98
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
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 111
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Controller",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 120,
                      "end": 130
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prototype",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 140
                    },
                    "start": 120,
                    "end": 140
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "create",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 147
                  },
                  "start": 120,
                  "end": 147
                },
                "typeArguments": null,
                "start": 113,
                "end": 147
              },
              "start": 111,
              "end": 147
            },
            "accessibility": null,
            "static": false,
            "start": 105,
            "end": 148
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "delete",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 161
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Controller",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 170,
                      "end": 180
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prototype",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 181,
                      "end": 190
                    },
                    "start": 170,
                    "end": 190
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "delete",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 197
                  },
                  "start": 170,
                  "end": 197
                },
                "typeArguments": null,
                "start": 163,
                "end": 197
              },
              "start": 161,
              "end": 197
            },
            "accessibility": null,
            "static": false,
            "start": 155,
            "end": 198
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "var",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 227
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Controller",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 236,
                      "end": 246
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prototype",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 256
                    },
                    "start": 236,
                    "end": 256
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "var",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 260
                  },
                  "start": 236,
                  "end": 260
                },
                "typeArguments": null,
                "start": 229,
                "end": 260
              },
              "start": 227,
              "end": 260
            },
            "accessibility": null,
            "static": false,
            "start": 224,
            "end": 261
          }
        ],
        "start": 99,
        "end": 290
      },
      "declare": false,
      "start": 82,
      "end": 290
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 290
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Controller",
    "start": 6,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "delete",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "var",
    "start": 65,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 82,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "IScope",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 113,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Controller",
    "start": 120,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 131,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "delete",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 163,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "Controller",
    "start": 170,
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
    "value": "prototype",
    "start": 181,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "delete",
    "start": 191,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "var",
    "start": 224,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 229,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "Controller",
    "start": 236,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 247,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "var",
    "start": 257,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290
  }
]
```
