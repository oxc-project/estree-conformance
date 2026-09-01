__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dec",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 22
          }
        ],
        "start": 20,
        "end": 23
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 32,
              "end": 35
            },
            "start": 30,
            "end": 35
          },
          "start": 24,
          "end": 35
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "propertyKey",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 50,
              "end": 56
            },
            "start": 48,
            "end": 56
          },
          "start": 37,
          "end": 56
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "descriptor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TypedPropertyDescriptor",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 93
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 94,
                      "end": 95
                    },
                    "typeArguments": null,
                    "start": 94,
                    "end": 95
                  }
                ],
                "start": 93,
                "end": 96
              },
              "start": 70,
              "end": 96
            },
            "start": 68,
            "end": 96
          },
          "start": 58,
          "end": 96
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypedPropertyDescriptor",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 122
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 124
                },
                "typeArguments": null,
                "start": 123,
                "end": 124
              }
            ],
            "start": 122,
            "end": 125
          },
          "start": 99,
          "end": 125
        },
        "start": 97,
        "end": 125
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 126
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": null,
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 159
                  },
                  "start": 155,
                  "end": 159
                }
              ],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 166
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
                  "start": 169,
                  "end": 171
                },
                "expression": false,
                "start": 166,
                "end": 171
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 155,
              "end": 171
            }
          ],
          "start": 149,
          "end": 173
        },
        "abstract": false,
        "declare": false,
        "start": 143,
        "end": 173
      },
      "exportKind": "value",
      "start": 128,
      "end": 173
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 173
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "propertyKey",
    "start": 37,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "descriptor",
    "start": 58,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "TypedPropertyDescriptor",
    "start": 70,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "TypedPropertyDescriptor",
    "start": 99,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 128,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 135,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 143,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 156,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  }
]
```
