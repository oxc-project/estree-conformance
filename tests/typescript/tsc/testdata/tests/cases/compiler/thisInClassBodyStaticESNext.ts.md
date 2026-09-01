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
        "start": 60,
        "end": 63
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
              "start": 70,
              "end": 71
            },
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 74,
              "end": 78
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 70,
            "end": 78
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 94,
              "end": 98
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 83,
            "end": 98
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "at",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 112
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ThisExpression",
                "start": 121,
                "end": 125
              },
              "id": null,
              "generator": false,
              "start": 115,
              "end": 125
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 103,
            "end": 125
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ft",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 139
            },
            "typeAnnotation": null,
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 163,
                      "end": 167
                    },
                    "start": 156,
                    "end": 167
                  }
                ],
                "start": 154,
                "end": 169
              },
              "expression": false,
              "start": 142,
              "end": 169
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 130,
            "end": 169
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mt",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 183
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 195,
                      "end": 199
                    },
                    "start": 188,
                    "end": 199
                  }
                ],
                "start": 186,
                "end": 201
              },
              "expression": false,
              "start": 183,
              "end": 201
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 174,
            "end": 201
          }
        ],
        "start": 64,
        "end": 203
      },
      "abstract": false,
      "declare": false,
      "start": 54,
      "end": 203
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 54,
  "end": 203
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 54,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 74,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 83,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 94,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 103,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "at",
    "start": 110,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 118,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 121,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 130,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "ft",
    "start": 137,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 142,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 156,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 163,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 174,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "mt",
    "start": 181,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 188,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 195,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  }
]
```
