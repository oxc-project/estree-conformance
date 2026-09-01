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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 24
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 25,
                      "end": 26
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 25,
                    "end": 26
                  }
                ],
                "start": 24,
                "end": 27
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 44,
                            "end": 45
                          },
                          "typeArguments": null,
                          "start": 44,
                          "end": 45
                        },
                        "start": 41,
                        "end": 45
                      },
                      "start": 34,
                      "end": 45
                    },
                    "start": 32,
                    "end": 45
                  },
                  "start": 28,
                  "end": 45
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strings",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TemplateStringsArray",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 56,
                            "end": 76
                          },
                          "typeArguments": null,
                          "start": 56,
                          "end": 76
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 79,
                          "end": 85
                        }
                      ],
                      "start": 56,
                      "end": 85
                    },
                    "start": 54,
                    "end": 85
                  },
                  "start": 47,
                  "end": 85
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "ThisExpression",
                        "start": 108,
                        "end": 112
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 104,
                      "end": 114
                    },
                    "start": 97,
                    "end": 114
                  }
                ],
                "start": 87,
                "end": 120
              },
              "expression": false,
              "start": 24,
              "end": 120
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 16,
            "end": 120
          }
        ],
        "start": 10,
        "end": 122
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 127
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 129
          },
          "optional": false,
          "computed": false,
          "start": 124,
          "end": 129
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "test",
                "cooked": "test"
              },
              "tail": true,
              "start": 129,
              "end": 135
            }
          ],
          "expressions": [],
          "start": 129,
          "end": 135
        },
        "start": 124,
        "end": 135
      },
      "directive": null,
      "start": 124,
      "end": 136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 141
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 143
          },
          "optional": false,
          "computed": false,
          "start": 138,
          "end": 143
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "test",
                "cooked": "test"
              },
              "tail": true,
              "start": 144,
              "end": 150
            }
          ],
          "expressions": [],
          "start": 144,
          "end": 150
        },
        "start": 137,
        "end": 150
      },
      "directive": null,
      "start": 137,
      "end": 151
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 151
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
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 16,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 28,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 34,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 41,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "strings",
    "start": 47,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 56,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 97,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 104,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 128,
    "end": 129
  },
  {
    "type": "Template",
    "value": "`test`",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  },
  {
    "type": "Template",
    "value": "`test`",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  }
]
```
