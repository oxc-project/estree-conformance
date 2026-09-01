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
            "name": "ooo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 16,
                "end": 19
              },
              "start": 15,
              "end": 19
            },
            "start": 12,
            "end": 19
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 19
        }
      ],
      "declare": true,
      "start": 0,
      "end": 20
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ooo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 28,
                      "end": 31
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "eee",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 32,
                      "end": 35
                    },
                    "optional": false,
                    "computed": false,
                    "start": 28,
                    "end": 35
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "oo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 36,
                    "end": 38
                  },
                  "optional": false,
                  "computed": false,
                  "start": 28,
                  "end": 38
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ah_ah",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 39,
                  "end": 44
                },
                "optional": false,
                "computed": false,
                "start": 28,
                "end": 44
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "ting",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 49
              },
              "optional": false,
              "computed": false,
              "start": 28,
              "end": 49
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "tang",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 54
            },
            "optional": false,
            "computed": false,
            "start": 28,
            "end": 54
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "walla",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 60
          },
          "optional": false,
          "computed": false,
          "start": 28,
          "end": 60
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "walla",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 66
        },
        "optional": false,
        "computed": false,
        "start": 28,
        "end": 66
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bing",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 87
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 90,
                "end": 94
              },
              "start": 83,
              "end": 94
            },
            "directive": null,
            "start": 83,
            "end": 95
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bang",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 116
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 119,
                "end": 123
              },
              "start": 112,
              "end": 123
            },
            "directive": null,
            "start": 112,
            "end": 124
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 158
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 161,
              "end": 163
            },
            "expression": false,
            "start": 146,
            "end": 163
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 184
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 181,
              "end": 186
            },
            "directive": null,
            "start": 181,
            "end": 187
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
              "start": 211,
              "end": 212
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 213,
              "end": 215
            },
            "abstract": false,
            "declare": false,
            "start": 205,
            "end": 215
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 248
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 249,
              "end": 251
            },
            "declare": false,
            "start": 237,
            "end": 251
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 281
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 282,
              "end": 284
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 270,
            "end": 284
          }
        ],
        "start": 68,
        "end": 304
      },
      "start": 22,
      "end": 304
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 304
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
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "ooo",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 22,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "ooo",
    "start": 28,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "eee",
    "start": 32,
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
    "value": "oo",
    "start": 36,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "ah_ah",
    "start": 39,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "ting",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "tang",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "walla",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "walla",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 83,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 90,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "bang",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 146,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 155,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 205,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 237,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 270,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  }
]
```
