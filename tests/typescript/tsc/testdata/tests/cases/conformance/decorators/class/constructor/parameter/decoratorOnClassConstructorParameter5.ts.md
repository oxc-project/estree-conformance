__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 70
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 71,
        "end": 74
      },
      "declare": false,
      "start": 56,
      "end": 74
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
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 95,
                "end": 98
              },
              "start": 93,
              "end": 98
            },
            "start": 89,
            "end": 98
          },
          "init": null,
          "definite": false,
          "start": 89,
          "end": 98
        }
      ],
      "declare": true,
      "start": 75,
      "end": 99
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BulkEditPreviewProvider",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 129
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
              "name": "Schema",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 158
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "vscode-bulkeditpreview",
              "raw": "'vscode-bulkeditpreview'",
              "start": 161,
              "end": 185
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 136,
            "end": 186
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "emptyPreview",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 210
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "scheme",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 221
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BulkEditPreviewProvider",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 246
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Schema",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 253
                    },
                    "optional": false,
                    "computed": false,
                    "start": 223,
                    "end": 253
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 215,
                  "end": 253
                }
              ],
              "start": 213,
              "end": 255
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 191,
            "end": 256
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 272
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 287
                      },
                      "start": 282,
                      "end": 287
                    }
                  ],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_modeService",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 319,
                          "end": 323
                        },
                        "typeArguments": null,
                        "start": 319,
                        "end": 323
                      },
                      "start": 317,
                      "end": 323
                    },
                    "start": 305,
                    "end": 323
                  },
                  "readonly": true,
                  "static": false,
                  "start": 282,
                  "end": 323
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 331,
                "end": 334
              },
              "expression": false,
              "start": 272,
              "end": 334
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 261,
            "end": 334
          }
        ],
        "start": 130,
        "end": 336
      },
      "abstract": false,
      "declare": false,
      "start": 100,
      "end": 336
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 336
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 56,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 66,
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
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 75,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 83,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 100,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "BulkEditPreviewProvider",
    "start": 106,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 136,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 143,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "String",
    "value": "'vscode-bulkeditpreview'",
    "start": 161,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 191,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "emptyPreview",
    "start": 198,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "scheme",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "BulkEditPreviewProvider",
    "start": 223,
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
    "value": "Schema",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 261,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 283,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 288,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 296,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "_modeService",
    "start": 305,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 319,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  }
]
```
